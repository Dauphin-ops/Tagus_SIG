import { useState } from 'react';

const OptionImpair = () => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-4 mb-0 mb-md-0">
          <img
            src="./src/assets/react.svg"
            alt="Image"
            style={imageStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>

        {/* Texte */}
        <div className="col-md-6">
          <h2 className="mb-3">Titre accrocheur</h2>
          <p>
            Voici une image avec un style inline en React. Lorsque tu passes la souris dessus,
            elle s'agrandit et devient plus lumineuse.
          </p>
          <a href="#" className="btn btn-primary">En savoir plus</a>
        </div>
      </div>
    </div>
  );
};

export default OptionImpair;
