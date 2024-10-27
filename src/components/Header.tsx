



import React, { useEffect, useState } from 'react';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <header>
          <div className="relative min-h-screen">
              <nav
                  className={` fixed top-0 w-full p-4 transition-all duration-300 ease-in-out 
                              ${isScrolled && 'bg-black bg-opacity-70 mb-2' } 
                              `} // z-10 para asegurar que esté por encima de otros elementos
              >
                  <div className="flex justify-end gap-5">
                      <a href="">Sobre Mí</a>
                      <a href="">Estudios</a>
                      <a href="">Habilidades</a>
                      <a href="">Proyectos</a>
                  </div>
              </nav>
          </div>
      </header>
  );
};

export default Header;