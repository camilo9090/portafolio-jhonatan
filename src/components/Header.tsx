import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react'



const Header = () => {

  const [scrollPos, setScrollPos] = useState(0);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollPos > 10 ? Math.min(scrollPos / 100, 0.95) : 0;

  return (
    <header className={`sticky z-50   shadow-blue-700  top-0 w-full lg:transition lg:duration-600 lg:ease-in-out md:animate-fade-down 
      md:animate-once md:animate-normal ${scrollPos > 100 ? "shadow-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: `rgba(0, 16, 50, ${opacity})` }}


    >


      {/* dentro del nav className={`fixed top-0 left-0 right-0 h-20 transition-all duration-300 ease-in-out  gap-5  
              
              ${isScrolled ? 'bg-black bg-opacity-70 mb-2 shadow-lg' : ''}`
            }
            style={{
              boxShadow: isScrolled ? '0 4px 10px rgba(0, 0, 255, 0.8)' : 'none',
            }}
       */}
      <div className='bg-slate-950 bg-opacity-70'>
        <div className='grid grid-cols-3 md:grid-cols-12 items-center w-full flex-row justify-between max-w-6xl mx-auto px-2 '>
          <div className="col-span-2 md:col-span-12 lg:col-span-3 md:text-center lg:text-left">
            <p
              className="text-gray-100 text-2xl font-extrabold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {`<`}
              <span>Jhonatan Dev</span> {`/>`}
            </p>
          </div>

          {/*Navegacion */}
          <div className='flex col-span-3 md:col-start-2 md:py-4 md:col-span-10 justify-center 
        lg:justify-end lg:col-span-8 flex-col md:flex-row md:items-center md:gap-8 '>



            <div className='md:hidden'>

              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <FaTimes className="h-6 w-6 text-gray-800" />
                ) : (
                  <FaBars className="h-6 w-6 text-gray-800" />
                )}
              </button>

            </div>





            <nav className={`md:flex order-4 text-2xl
           items-end px-3 md:items-center gap-6 flex-col
            mb-8 md:mb-0 md:flex-row text-right md:col-span-12
             lg:pb-0 transition-all duration-600 ease-in-out z-50
            }  ${isOpen ? 'flex h-auto ' : 'hidden'}`}>
              <a className='font-bold' href="">Sobre Mí</a>
              <a className='font-bold' href="">Estudios</a>
              <a className='font-bold' href="">Habilidades</a>
              <a className='font-bold' href="">Proyectos</a>


            </nav>
          </div>


        </div>

      </div>


    </header>
  );
};

export default Header;
