import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/acceuil';
import Carte_0 from './pages/carte-0';
import Carte_1 from './pages/carte-1';
import Login from './pages/login';
import Garde from './pages/garde';
import SavoirPlus from './pages/savoir-plus';
import PrivateRoute from './components/route-prive';


export default function App() {
  return (
    <Router>

          <Routes>
            {/* Routes vers chaque page de mon site */}
            <Route path="/" element={<Garde />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/map 1" element={<PrivateRoute><Carte_1 /></PrivateRoute>} />
            {/* <Route path="/map 0" element={<Carte_0 />} /> */}
            <Route path="/log" element={<Login />} />
            <Route path="/en savoir plus" element={<PrivateRoute><SavoirPlus /></PrivateRoute>} />
          </Routes>

    </Router>
  );
}
