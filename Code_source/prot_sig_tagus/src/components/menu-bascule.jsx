import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hook pour fermer en cliquant à l'extérieur
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  const menuItems = [
    { label: 'Accueil', icon: '🏠' },
    { label: 'Profil', icon: '👤' }, 
    { label: 'Paramètres', icon: '⚙️' },
    { label: 'Déconnexion', icon: '🚪' }
  ];

  return (
    <div ref={menuRef} style={{ position: 'relative' }}>
      {/* Bouton Burger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            animate={{
              width: isOpen ? (i === 2 ? '0' : '24px') : '24px',
              opacity: isOpen && i === 2 ? 0 : 1,
              rotate: i === 1 ? (isOpen ? 45 : 0) : i === 3 ? (isOpen ? -45 : 0) : 0,
              y: i === 1 ? (isOpen ? 8 : 0) : i === 3 ? (isOpen ? -8 : 0) : 0
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: '2px',
              background: '#333',
              display: 'block',
              transformOrigin: 'center'
            }}
          />
        ))}
      </button>

      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              minWidth: '200px',
              overflow: 'hidden',
              zIndex: 1000,
              padding: '8px 0'
            }}
          >
            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => {
                  alert(`${item.label} sélectionné`);
                  setIsOpen(false);
                }}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  ':hover': {
                    background: '#f5f5f5'
                  }
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}