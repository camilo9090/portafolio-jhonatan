import { useEffect, useState } from 'react';
import Typewrite from "../hooks/useTypeWrite";
import { AiOutlineDownload, AiFillGithub } from 'react-icons/ai';
import { FaLocationDot } from "react-icons/fa6";





export default function Main() {


    const [test, setTest] = useState(["", ""]);


    useEffect(() => {

        setTest([

            (test[0] = "Ingeniero de sistemas"),
            (test[1] = "Desarrollador Front End")

        ])
    }, [])

    return (

        <main className="text-gray-100  pt-72 md:pt-6 -mt-24 md:-mt-32 md:pb-10 gap-0 bg-slate-950 bg-opacity-80">
            <div className="max-w-6xl mx-auto md:px-4 pt-28 md:pt-36 grid md:grid-cols-3 animate-fade-left animate-once ">
                <div className="text-4xl md:col-span-2 flex items-center font-extrabold p-2 mt-8  md:text-left drop-shadow-[0_3.2px_3.2px_rgba(0,78,207,1)] ">

                    <div>
                        <h1 className='text-center'>Hola, soy
                            <span className="bg-gradient-to-l from-gray-200 to-blue-400 text-transparent bg-clip-text drop-shadow-none"> Jhonatan Camilo Uribe Paez</span>
                        </h1>
                        <div className=" md:text-5xl text-center">
                            <Typewrite

                                words={test}
                                delay={80}
                            />

                            <div className='flex justify-center mt-5 flex-col gap-5 sm:mt-6  sm:grid sm:grid-cols-2 p-4 '>
                                <a className='group relative inline-flex mt-2 px-4 py-2 bg-slate-500 border rounded-full  text-center border-transparent font-bold hover:border-black hover:bg-white'
                                    href="src/assets/documents/cvJhonatanUribe.pdf"
                                    download="cvJhonatanUribe.pdf"
                                >
                                    <span className='absolute inset-0 border-2 ease-in-out w-full border-white rounded-full group-hover:border-black transition-colors duration-500'></span>
                                    <AiOutlineDownload
                                        size={30}
                                        className='group-hover:text-black'
                                    />
                                    <span className='group-hover:text-black relative w-ful text left-5 text-xl'>
                                        Descargar CV
                                    </span>
                                </a>
                                <a className='group relative inline-flex mt-2 px-4 py-2 bg-slate-500 border rounded-full text-center border-transparent font-bold hover:border-black hover:bg-white'
                                    target='_blank'
                                    href="https://github.com/camilo9090">
                                    <span className='absolute inset-0 border-2 ease-in-out w-full border-white rounded-full group-hover:border-black transition-colors duration-500'></span>
                                    <AiFillGithub
                                        size={30}
                                        className='group-hover:text-black '
                                    />
                                    <span className='relative w-ful text left-5 text-xl group-hover:text-black'>

                                        Ver GitHub
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='flex text-center ml-4 mt-5'>
                            <FaLocationDot
                            size={30}
                            className='animate-bounce animate-infinite'
                            />
                            <h1 className='ml-4 text-xl font-bold'>Disponible en:

                                <span> Caicedonia | Armenia</span>
                            </h1>
                            </div>
                    </div>
                </div>
                <div className="md:col-start-3 flex flex-col gap-5 justify-start items-center py-3 ">
                    <img
                        className="max-w-52 md:max-w-full h-auto rounded-full mt-20 shadow-lg shadow-sky-700 "
                        src="/src/assets/img/imagen1.webp"
                        alt="foto perfil"
                        width={321}
                        height={251}
                    />
                    <div className='flex  gap-5'>
                   
                        <a
                            href="mailto:camilou9090@gmail.com"
                            target="_blank"
                            className="group w-10 h-10 -mt-4 flex items-center justify-center relative overflow-hidden rounded-full bg-purple-900 shadow-md shadow-purple-500 hover:bg-purple-100  duration-500"
                            aria-label="Gmail"
                        >
                            <svg
                                className="relative z-20 transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="`20"
                                height="20"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    className="group-hover:fill-slate-500 transition-colors duration-300"
                                    fill="#4caf50"
                                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                ></path>
                                <path
                                    className="group-hover:fill-black transition-colors duration-300"
                                    fill="#1e88e5"
                                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                ></path>
                                <polygon
                                    className="group-hover:fill-slate-500 transition-colors duration-300"
                                    fill="#e53935"
                                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                ></polygon>
                                <path
                                    className="group-hover:fill-slate-600 transition-colors duration-300"
                                    fill="#c62828"
                                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                ></path>
                                <path
                                    className="group-hover:fill-black transition-colors duration-300"
                                    fill="#fbc02d"
                                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                ></path>
                            </svg>
                        </a>


                        <a href="https://www.linkedin.com/in/jcuribep/"
                            target="_blank"
                            className="group w-10 h-10 flex items-center justify-center rounded-full bg-sky-800 shadow-md shadow-sky-500 hover:bg-sky-100 duration-500"
                            aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
                                className="transition-colors duration-200">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
                                    stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                                    text-anchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(5.33333,5.33333)">
                                        <path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,
                                        -5h26c2.762,0 5,2.238 5,5z" fill-opacity="0" className="fill-[#0078d4] group-hover:fill-black"></path>
                                        <path d="M30,37v-10.099c0,-1.689 -0.819,-2.698 -2.192,-2.698c-0.815,0 -1.414,0.459 -1.779,1.364c-0.017,0.064 -0.041,0.325
                                        -0.031,1.114l0.002,10.319h-7v-19h7v1.061c1.022,-0.705 2.275,-1.061 3.738,-1.061c4.547,0 7.261,3.093
                                        7.261,8.274l0.001,10.726zM11,37v-19h3.457c-2.003,0 -3.457,-1.472 -3.457,-3.501c0,-2.027 1.478,-3.499
                                        3.514,-3.499c2.012,0 3.445,1.431 3.486,3.479c0,2.044 -1.479,3.521 -3.515,3.521h3.515v19z"
                                            className="fill-black opacity-5 group-hover:fill-black"></path>
                                        <path d="M30.5,36.5v-9.599c0,-1.973 -1.031,-3.198 -2.692,-3.198c-1.295,0 -1.935,0.912 -2.243,1.677c-0.082,0.199 
                                          -0.071,0.989 -0.067,1.326l0.002,9.794h-6v-18h6v1.638c0.795,-0.823 2.075,-1.638 4.238,-1.638c4.233,0 
                                         6.761,2.906 6.761,7.774l0.001,10.226zM11.5,36.5v-18h6v18zM14.457,17.5c-1.713,0 -2.957,-1.262 -2.957,-3.001
                                        c0,-1.738 1.268,-2.999 3.014,-2.999c1.724,0 2.951,1.229 2.986,2.989c0,1.749 -1.268,3.011 -3.015,3.011z"
                                            className="fill-black opacity-7 group-hover:fill-black"></path>
                                        <path d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,
                                         -2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198
                                        -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 
                                        4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z" className="fill-white group-hover:fill-black"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="https://wa.me/573224250426"
                            target="_blank"
                            className="group w-10 h-10 -mt-4 flex items-center justify-center relative overflow-hidden rounded-full bg-green-600 shadow-md shadow-green-500  hover:bg-green-200 duration-500"
                            aria-label="Whastapp">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,
                                3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                                <path
                                    className="fill-white group-hover:fill-black"
                                    fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532
                                ,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,
                                19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                                <path
                                    className=" group-hover:fill-green-100 duration-500"
                                    fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883
                                    ,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,
                                    19.778,38.156,15.814,35.176,12.832z"></path>
                                <path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,
                                    0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057
                                    ,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277
                                    ,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815
                                    -2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,
                                    0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"
                                    className="fill-white group-hover:fill-black"></path>
                            </svg>

                        </a>
                    </div>
                    
                </div>



                
            </div>
           
           

        </main>


    )
}
