import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative z-10">
      
        <nav
          className={`fixed top-0 left-0 right-0 h-20 transition-all duration-300 ease-in-out  gap-5 
              
            ${isScrolled ? 'bg-black bg-opacity-70 mb-2 shadow-lg' : ''}`
          }
          style={{
            boxShadow: isScrolled ? '0 4px 10px rgba(0, 0, 255, 0.8)' : 'none',
          }}
        >
          <div className="max-w-screen-lg mx-auto flex items-center gap-5 h-full p-10 sm:justify-center md:justify-center lg:justify-end ">
            <div className=" gap-5 text-2xl hidden sm:flex ">
              <a href="#about">Sobre Mí</a>
              <a href="#education">Estudios</a>
              <a href="#skills">Habilidades</a>
              <a href="#projects">Proyectos</a>
            </div>
          </div>

        </nav>
      
    </header>
  );
};

export default Header;
