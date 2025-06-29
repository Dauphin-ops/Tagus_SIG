import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import OptionImpair from "../components/option-impair";
import OptionPair from "../components/option-pair";
import Footer from "../components/footer";



export default function Garde() {
    return (
      <>
{/* Barre de navigation */}
        <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(6px)' }}>
            <div className='collapse navbar-collapse ' style={{ color:'black', borderBottomRightRadius: '60px',borderTopRightRadius: '60px',padding: '30px'}}>
                <Link className="navbar-brand" to="/"><strong>TagusWebMap</strong></Link>
            </div>
            <div className='m-5 align-items-right'>
                <div className="items-center gap-4">
                    <Link to="/log"><Button
                                        className="border justify-content-center hover-effect pt-2 pb-1"
                                        style={{ background:'white', color: 'black', borderRadius: '50px', transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgb(0,0,0)';
                                            e.currentTarget.style.color = 'rgb(255, 255, 255)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#ffffff';
                                            e.currentTarget.style.color = 'black';
                                        }}
                                        >
                                        <h6>Se connecter / S'inscrire</h6>
                                    </Button></Link>
                </div>
            </div>
        </nav>

{/* Page de garde */}
        <div className='flex' style={{marginTop: '150px'}}>
            <div className='container text-center align-items-center p-5 m-10 '>
                <h1>Bienvenue sur TagusWebMap</h1>
                <p></p>
                <h2><strong>La visualisation en un clic !</strong></h2>
                <p>TagusWebMap vous propose d'explorer les données géographiques du Cameroun à travers une carte interactive.</p>
            </div>
            <div className="continer m-5" >
                <div><Link to="/log"><OptionImpair imag=".\src\assets\OIP.png" title="CARTE" message="Visualisez en un clic les donnees cartographiques de TAGUS DRONE en un seul clique, et cela peu importe ou vous vous trouvez et quelle appareil vous utilisez !  " /></Link></div>
                <div><Link to="/log"><OptionPair imag=".\src\assets\info.png" title="INFO" message="Retrouvez toutes les informations necessaires sur nous et sur le site." /></Link></div>
                <div><Link to="/log"><OptionImpair imag=".\src\assets\dauphin.png" title="OPTIONS AVANCEES" message="Ce contenu est pour l'instant inaccessible au public pour des raisons de maintenance. Merci !" /></Link></div>
            </div>
        </div>

{/* Pieds de page */}
        <Footer/>
      </>
    );
  }
