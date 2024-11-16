

import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
export default function Studies() {



    const { ref: titleStudies, inView: initialTitle } = useInView({

        triggerOnce: true,
        initialInView: false
    });



    const { ref: studiesOne, inView: initialInView } = useInView({

        triggerOnce: true,

    });

    const { ref: studiesTwo, inView: initialInViewTwo } = useInView({

        triggerOnce: true,

    });

    const { ref: studiesThree, inView: initialInViewThree } = useInView({

        triggerOnce: true,

    });
    return (

        <div className="">
            <section id="estudies"
                className="text-gray-100 pb-20  px-10" 
                style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}
            >

                <div className={` mx-auto flex justify-center gap-3 md:opacity-0 drop-shadow-[2px 2px 5px rgba(0, 0, 255, 0.6)] ${initialTitle && ' md:animate-fade-down md:animate-once md:animate-ease-in md:animate-normal md:pt-16'}`}

                    ref={titleStudies}
                >
                    <h2 className={`text-center text-white text-4xl font-black  `}
                    >Estudios</h2>
                    <AcademicCapIcon

                        className=" inline-block h-10 w-10"
                    />

                </div>

                <div className="pb-10 max-w-xl md:max-w-2xl mx-auto">

                    <ul>

                        <li
                            ref={studiesOne}
                            className={`relative  md:opacity-0 md:flex items-start gap-4 py-6 ${initialInView && 'px-2 md:animate-fade-left md:animate-once md:animate-ease-in md:animate-normal md:pt-16'} `}>
                            <span className="border-l-4 ml-2 mt-2 border-l-white absolute h-full"></span>
                            <span className="block bg-white h-5 w-5 rounded-full"></span>

                            <div className="text-gray-100 ml-8 md:ml-0 font-bold md:-mt-0 -mt-6 rounded-xl bg-black bg-opacity-70 border border-white gap-4 p-6 max-w-lg">
                                <p

                                    className=" text-3xl mb-2 font-bold"> Universidad del Quindío</p>

                                <p

                                    className="text-lg text-blue-400">Carrera :

                                    <span

                                        className="text-white"> Ingeniería de Sistemas y Computación</span>
                                </p>

                                <p

                                    className="text-lg text-blue-400">Duración :

                                    <span

                                        className="text-white"> 10 Semestres</span>


                                </p>

                                <p >  <span>2018-2024</span></p>

                            </div>


                        </li>


                        <li
                            ref={studiesTwo}
                            className={`relative  md:opacity-0 md:flex items-start gap-4 py-6  ${initialInViewTwo && 'px-2 md:animate-fade-right md:animate-once md:animate-ease-in md:animate-normal md:pt-16'} `}>
                            <span className="border-l-4 ml-2  border-l-white absolute h-full"></span>
                            <span className="block bg-white h-5 w-5 rounded-full"></span>

                            <div className="text-gray-100 ml-8 md:ml-0 font-bold md:-mt-0 -mt-6 rounded-xl border border-white bg-black bg-opacity-70 gap-4 p-6 max-w-lg">
                                <p className=" text-3xl mb-2 font-bold"> Udemy</p>

                                <p
                                    className="text-lg text-blue-400">Curso :
                                    <span className="text-white"> React y TypeScript</span>
                                </p>

                                <p
                                    className="text-lg text-blue-400">Instructor :

                                    <span className="text-white"> Juan Pablo de la Torre</span>
                                </p>
                                <p
                                    className="text-lg text-blue-400">Duración :

                                    <span className="text-white"> 57 horas</span>

                                </p>

                                <p className="text-lg text-blue-400 ">Descripción :
                                    <span className="text-gray-100 ml-1">
                                        Fundamentos de React: desde el uso de hooks hasta el manejo avanzado de
                                        estado con Context API, Zustand y React Query. Integración de TypeScript, consumo de APIs externas
                                        con validación de datos en Zod, diseño con Tailwind CSS, Headless UI y
                                        React Hook Form. Uso de Next.js y desarrollo FullStack con stacks PERN/MERN
                                        y bases de datos como Prisma, Sequelize y Mongoose.</span>
                                </p>

                            </div>
                        </li>

                        <li
                            ref={studiesThree}
                            className={`relative md:opacity-0 md:flex items-start gap-4 py-6  ${initialInViewThree && 'px-2 md:animate-fade-left md:animate-once md:animate-ease-in md:animate-normal md:pt-16'} `}>
                            <span className="border-l-4 ml-2 -mt-5 border-l-white absolute h-full"></span>
                            <span className="block bg-white h-5 w-5 rounded-full"></span>

                            <div className="text-gray-100 ml-8 md:ml-0 font-bold md:-mt-0 -mt-6 rounded-xl border border-white bg-black bg-opacity-70 gap-4 p-6 max-w-lg">
                                <p

                                    className=" text-3xl mb-2 font-bold"> Udemy</p>

                                <p

                                    className="text-lg text-blue-400">Curso :

                                    <span

                                        className="text-white"> Desarrollo Web Completo</span>
                                </p>

                                <p

                                    className="text-lg text-blue-400">Instructor :

                                    <span

                                        className="text-white"> Juan Pablo de la Torre</span>
                                </p>

                                <p

                                    className="text-lg text-blue-400">Duración :

                                    <span

                                        className="text-white"> 83 horas</span>

                                </p>

                                <p

                                    className="text-lg text-blue-400 ">Descripción :
                                    <span

                                        className="text-gray-100 ml-1">
                                        Fundamentos de desarrollo web: dominio de HTML y CSS aplicando metodologías
                                        como BEM y módulos CSS. Programación en JavaScript moderno (ES6)
                                        y desarrollo de aplicaciones dinámicas con PHP y MySQL, integrando
                                        bases de datos y técnicas de seguridad.</span>
                                </p>

                            </div>
                        </li>
                    </ul>
                </div>

            </section>


        </div>
    )
}
