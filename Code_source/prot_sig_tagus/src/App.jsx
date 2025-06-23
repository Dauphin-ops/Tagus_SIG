import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav-bar';
import Home from './pages/acceuil';
import Carte_v from './pages/carte-0';
import MapPage from './pages/carte-1';
// import Sidebar from './components/side-bar';
import Login from './pages/login';

export default function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map 1" element={<MapPage />} />
        <Route path="/map 0" element={<Carte_v />} />
        <Route path="/log" element={<Login />} />
      </Routes>

    </Router>
  );
}
