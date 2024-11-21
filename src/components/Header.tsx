import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react'
import { Link } from "react-scroll";



const Header = () => {



  const [scrollPos, setScrollPos] = useState(0);

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

  /* 
    const leer=() */

  return (
    <header className={`sticky z-50   shadow-blue-700  top-0 w-full lg:transition lg:duration-600 lg:ease-in-out  ${scrollPos > 100 ? "shadow-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: `rgba(0, 16, 50, ${opacity})` }}


    >
      <div className='bg-slate-950 bg-opacity-70 p-7 md:p-2 '>


        <div className='md:animate-fade-down md:animate-once md:animate-normal'>

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
            <div className='md:hidden flex p-4 justify-end'>

              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <FaTimes className="h-6 w-6 text-white" />
                ) : (
                  <FaBars className="h-6 w-6 text-white" />
                )}
              </button>

            </div>
            {/*Navegacion */}
            <div className='flex col-span-3 md:col-start-2 md:py-4 md:col-span-10 justify-center 
              lg:justify-end lg:col-span-8 flex-col md:flex-row md:items-center md:gap-8 '>




              <nav className={`md:flex order-4 text-2xl
           items-end px-3 md:items-center gap-6 flex-col
            mb-8 md:mb-0 md:flex-row text-right md:col-span-12
             lg:pb-0 transition-all duration-600 ease-in-out z-50
            }  ${isOpen ? 'flex h-auto ' : 'hidden'}`}>





                <Link
                  to="aboutme"
                  smooth={true}
                  duration={500}
                  className=""
                >
                  Sobre Mí
                </Link>


                <Link
                  to='estudies'
                  smooth={true}
                  duration={500}
                  className='font-bold hover:text-white hover:underline'


                >Estudios</Link>
                <Link
                  to='habilidades'
                  smooth={true}
                  duration={500}
                  className='font-bold hover:text-white hover:underline'


                >Habilidades</Link>
                
                
                <Link
                  to='projects'
                  smooth={true}
                  duration={500}
                  className='font-bold hover:text-white hover:underline'


                >Proyectos</Link>





              </nav>
            </div>


          </div>

        </div>


      </div>


    </header>
  );
};

export default Header;
