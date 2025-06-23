import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Carte_v from './App.jsx'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Carte_v /> */}
    <App/>
  </StrictMode>
);
