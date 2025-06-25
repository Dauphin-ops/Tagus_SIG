import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

import Home from './pages/acceuil';
import Carte_0 from './pages/carte-0';
import Carte_1 from './pages/carte-1';
import Login from './pages/login';
import Garde from './pages/garde';


export default function App() {
  return (
    <Router>

          <Routes>
            {/* Routes vers chaque page de mon site */}
            <Route path="/" element={<Home />} />
            <Route path="/map 1" element={<Carte_1 />} />
            <Route path="/map 0" element={<Carte_0 />} />
            <Route path="/log" element={<Login />} />
            <Route path="/garde" element={<Garde />} />
          </Routes>

    </Router>
  );
}
