import { Link } from "react-router-dom";

import OptionImpair from "../components/option-impair";
import OptionPair from "../components/option-pair";
import Navbar from "../components/nav-bar";
import Footer from "../components/footer";

export default function Home() {
    return (
      <>
{/* Composant de la barre de navigation */}
        <Navbar/>

{/* Page d'acceuil */}
        <div className='container text-center align-items-center p-5 m-10 '>
            <h1><strong>La visualisation en un clic</strong></h1>
            <p>TagusWebMap vous propose d'explorer les données géographiques du Cameroun à travers une carte interactive.</p>
        </div>
        <div className="container align-items-center">
          <div><Link to="/map 1"><OptionImpair imag=".\src\assets\OIP.png" title="CARTE" message="Visualisez en un clic les donnees cartographiques de TAGUS DRONE en un seul clique, et cela peu importe ou vous vous trouvez et quelle appareil vous utilisez !  " /></Link></div>
          <div><Link to="/en savoir plus"><OptionPair imag=".\src\assets\info.png" title="INFO" message="Retrouvez toutes les informations necessaires sur nous et sur le site." /></Link></div>
          <div><Link to="/home"><OptionImpair imag=".\src\assets\dauphin.png" title="OPTIONS AVANCEES" message="Ce contenu est pour l'instant inaccessible au public pour des raisons de maintenance. Merci !" /></Link></div>
        </div>

{/* Pieds de pasge  */}
        <Footer/>
      </>
    );
  }