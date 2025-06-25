import { Link } from "react-router-dom";

import OptionImpair from "../components/option-impair";
import OptionPair from "../components/option-pair";
import Navbar from "../components/nav-bar";
import Footer from "../components/footer";

export default function Home() {
    return (
      <>
        <Navbar/>
        <div className='container text-center align-items-center p-5 m-10 '>
            <h1><strong>La visualisation en un clic</strong></h1>
            <p>TagusWebMap vous propose d'explorer les données géographiques du Cameroun à travers une carte interactive.</p>
        </div>
        <div className="container align-items-center">
          <div><Link to="/map 1"><OptionImpair/></Link></div>
          <div><Link to="/en savoir plus"><OptionPair/></Link></div>
          <div><Link to="/"><OptionImpair/></Link></div>
        </div>
        <Footer/>
      </>
    );
  }