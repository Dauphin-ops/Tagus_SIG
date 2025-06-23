import Sidebar from '../components/side-bar';

export default function Home() {
    return (
      <div className="flex">
        <div className='flex'><Sidebar /></div>
        <div className='flex'>
            <h1>Bienvenue sur TagusWebMap</h1>
            <p>Explorez les données géographiques du Cameroun à travers une carte interactive.</p>
        </div>
      </div>
    );
  }