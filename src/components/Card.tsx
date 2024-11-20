import { useState } from "react"
import { projectsType } from "../types"
import { AiFillGithub,AiFillFolder } from "react-icons/ai"



type CardProps = {

    project: projectsType

}



export default function Card({ project }: CardProps) {

    const [viewText, setviewText] = useState(false)

    return (



        <div className="p-2 pb-5  max-w-sm mx-auto h-full bg-[linear-gradient(45deg,transparent_25%,rgba(70,70,70,.2)_50%,transparent_75%,transparent_100%)]
                 bg-slate-950 bg-opacity-70 bg-[length:250%_250%,100%_100%] 
                 bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0]
                  hover:duration-[1500ms] border overflow-hidden rounded-md border-white flex flex-col text-gray-100 animate-shine">



            <a
                target="_blank"
                href={`${project.url}`}>
                <div className="hover:scale-105 transition-transform duration-500 p-1">
                    <img
                        src={`../src/assets/img/projects/${project.img}.webp`}
                        alt={`${project.nombre}`}
                        className="rounded-lg border  border-white  "
                        loading="lazy"
                        width={400}
                        height={400}

                    />
                </div>

            </a>


            <div className="p-5">

                <div className="text-2xl font-bold mb-2 mt-2 ">

                    <p>{project.nombre}</p>
                </div>


                <div className=" font-semibold text-xl">
                    <p>

                        {viewText ? project.descripcion : `${project.descripcion.slice(0, 51)}...`}
                    </p>

                    <p

                        onClick={() => setviewText(!viewText)}
                        className="text-white mt-2 hover:text-blue-300 cursor-pointer"
                    >

                        {viewText ? `Mostrar Menos` : `Mostrar Más`}
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-5">

                    {project.tecnologias.map(salida => (
                        <div className="bg-slate-400  border border-white rounded-full w-full  inline-flex px-3 py-1">

                            <div className="flex justify-center items-center gap-5  max-w-screen-sm text-sm">


                                <img
                                    src={`../src/assets/img/${salida.nombre}.svg`}
                                    alt={salida.nombre}
                                    className="bg-black w-5 h-5"

                                />
                                <p className="font-semibold">{salida.nombre}</p>



                            </div>

                        </div>



                    ))}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 justify-center">
                    <div className=" group bg-slate-500 hover:bg-white p-2 border hover:border-black border-white rounded-md flex ">

                        <a className="inline-flex items-center" href={project.repositorio}>
                            <AiFillGithub size={30} className='group-hover:text-black mr-3 inline-block' />
                            <span className="group-hover:text-black relative w-full text-left text-md">Repositorio</span>

                        </a>

                    </div>

                    {project.nombre !== "portafolio" && (
                       <div className=" group bg-slate-500 hover:bg-white p-2 border hover:border-black border-white rounded-md flex ">


                       <a className="inline-flex items-center" href={project.url}>

                           <AiFillFolder size={30} className='group-hover:text-black mr-3 inline-block' />
                           <span className="group-hover:text-black relative w-full text-left text-md">Demo</span>

                       </a>

                   </div>
                    )}




                </div>



            </div>




        </div>




    )
}
