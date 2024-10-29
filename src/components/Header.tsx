



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
      <div className=" relative min-h-16 ">       

        <nav
          className={`fixed top-0 w-full p-10 h-16 transition-all duration-300 ease-in-out 
            hidden sm:flex sm:justify-center md:justify-center lg:justify-end gap-5 items-center  
                              ${isScrolled && 'bg-black bg-opacity-70 mb-2'}`
          }
          style={{
            boxShadow: isScrolled ? '0 4px 10px rgba(0, 0, 255, 0.8)' : 'none', // Sombra azul
          }}
        >
          <div className="flex gap-5">
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