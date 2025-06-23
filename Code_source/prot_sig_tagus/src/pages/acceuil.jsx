import OptionImpair from "../components/option-impair";
import OptionPair from "../components/option-pair";
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className='flex m-5'>
        <div className='container text-center align-items-center m-10 p-5'>
            <h1>Bienvenue sur TagusWebMap</h1>
            <p>Explorez les données géographiques du Cameroun à travers une carte interactive.</p>
        </div>
        <div className="continer m-5">
          <div><Link to="/map 1"><OptionImpair/></Link></div>
          <div><Link to="/en savoir plus"><OptionPair/></Link></div>
          <div><Link to="/"><OptionImpair/></Link></div>
        </div>
      </div>
    );
  }