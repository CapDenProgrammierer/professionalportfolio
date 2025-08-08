// Ejemplo de cómo actualizar AnimatedBackground.jsx con tu animación real:

import Lottie from 'lottie-react';
import animationData from '../assets/tu-animacion.json'; // <-- Tu archivo JSON aquí

const AnimatedBackground = ({ 
  className = "",
  speed = 1,
  opacity = 0.1,
  zIndex = -1 
}) => {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: zIndex,
        opacity: opacity
      }}
    >
      <Lottie
        animationData={animationData} // <-- Usar tu animación real
        speed={speed}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: true,
          progressiveLoad: false,
          hideOnTransparent: true
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
