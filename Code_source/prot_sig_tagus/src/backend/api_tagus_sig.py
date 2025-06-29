import json
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
import psycopg2
import psycopg2.extras
from fastapi.security import OAuth2PasswordBearer



# Application FastAPI
app = FastAPI()

# Middleware CORS : autorise le frontend React à faire des requêtes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # sécurise l'accès à ton frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connexion à la base PostgreSQL
def get_connection():
    return psycopg2.connect(
        host="localhost",
        port=5433,
        database="DB_SIG",
        user="postgres",
        password="tttt"
    )

# JWT
SECRET_KEY = "une_chaine_secrete_ultra_complexe"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Decoration
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Token invalide")

# Models
class UserCreate(BaseModel):
    nom: str
    prenom: str
    mot_de_passe: str
    role: str

class UserLogin(BaseModel):
    nom: str
    prenom: str
    mot_de_passe: str
    role: str

# Signup endpoint
@app.post("/signup")
def signup(user: UserCreate):
    conn = get_connection()
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # Vérifie si l'utilisateur existe déjà
    cursor.execute("SELECT * FROM usersig WHERE nom_user=%s AND prenom_user=%s", (user.nom, user.prenom))
    if cursor.fetchone():
        conn.close()
        raise HTTPException(status_code=400, detail="Utilisateur déjà existant")

    # Hash du mot de passe
    hashed_pw = hash_password(user.mot_de_passe)

    # Insertion dans la base
    cursor.execute(
        "INSERT INTO usersig (nom_user, prenom_user, password_user, role_user) VALUES (%s, %s, %s, %s)",
        (user.nom, user.prenom, hashed_pw, user.role)
    )
    conn.commit()

    # Récupérer l'utilisateur nouvellement inscrit
    cursor.execute(
        "SELECT * FROM usersig WHERE nom_user=%s AND prenom_user=%s AND role_user=%s",
        (user.nom, user.prenom, user.role)
    )
    db_user = cursor.fetchone()
    conn.close()

    # Création du token JWT
    token_data = {
        "sub": f"{db_user['nom_user']} {db_user['prenom_user']}",
        "role": db_user["role_user"]
    }

    access_token = jwt.encode(
        {**token_data, "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)},
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return {"access_token": access_token, "token_type": "bearer"}


# Login endpoint
@app.post("/login")
def login(user: UserLogin):
    conn = get_connection()
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    cursor.execute("SELECT * FROM usersig WHERE nom_user=%s AND prenom_user=%s AND role_user=%s", (user.nom, user.prenom, user.role))
    db_user = cursor.fetchone()
    conn.close()

    if not db_user or not verify_password(user.mot_de_passe, db_user["password_user"]):
        raise HTTPException(status_code=401, detail="Nom, prénom, role ou mot de passe invalide")

    token_data = {
        "sub": f"{db_user['nom_user']} {db_user['prenom_user']}",
        "role": db_user["role_user"]
    }

    access_token = jwt.encode(
        {**token_data, "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)},
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return {"access_token": access_token, "token_type": "bearer"}


# Fonction générique pour retourner une FeatureCollection GeoJSON
def fetch_geojson(query, id_col="id", name_col="nom"):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()
    features = []

    for row in rows:
        id_, name, geojson = row
        geometry = json.loads(geojson)
        feature = {
            "type": "Feature",
            "geometry": geometry,
            "properties": {
                "id": id_,
                "nom": name
            }
        }
        features.append(feature)

    cur.close()
    conn.close()

    return {
        "type": "FeatureCollection",
        "features": features
    }

# ROUTES API
@app.get("/api/features/{layer_type}")
def get_features(layer_type: str):
    queries = {
        "arbres": ("SELECT id, nom, ST_AsGeoJSON(geom) FROM points", "id", "nom"), # Il me faut des donnees cartographiees en point comme des arbres ou des poteaux
        "routes": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM routes", "id", "nom"),
        "routes_principales": ("SELECT id, nom, ST_AsGeoJSON(geom) FROM routes WHERE type='principale'", "id", "nom"), #Pas encore
        "routes_secondaires": ("SELECT id, nom, ST_AsGeoJSON(geom) FROM routes WHERE type='secondaire'", "id", "nom"), #Pas encore
        "appartements": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM appartements", "gid", "name"),
        "maisons": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM maison", "id", "nom"),
        "buildings": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM building", "gid", "name"),
        "hotels": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM hotel ", "id", "nom"),
        "commerciaux": ("SELECT gid, name, ST_AsGeoJSON(geom) FROM commercial ", "id", "nom"),
    }

    if layer_type not in queries:
        return {"error": "Type de couche inconnu."}

    query, id_col, name_col = queries[layer_type]
    return fetch_geojson(query, id_col, name_col)
