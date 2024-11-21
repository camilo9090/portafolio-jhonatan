
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { blandas, duras } from "../data/data"
import { useInView } from "react-intersection-observer";


export default function Abilities() {


  const { ref: titleAbilities, inView: initialAbilities } = useInView({

    triggerOnce: true,
    initialInView: false
  });


  const { ref: Hblandas, inView: initialBlandas } = useInView({

    triggerOnce: true,

  });

  const { ref: Hduras, inView: initialDuras } = useInView({

    triggerOnce: true,

  });


  return (


    <section className="relative h-full w-full"
      id="habilidades"
      style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}
    >

      <div

        className="max-w-xl md:max-w-5xl mx-auto pt-10"
        ref={titleAbilities}
      >
        <div

          className={`flex opacity-0 justify-center text-4xl gap-3 ${initialAbilities && 'opacity-100 md:animate-fade-down animate-none md:animate-once md:animate-ease-in md:animate-normal'}`}
        >

          <h2 className="font-black">Habilidades</h2>
          <PuzzlePieceIcon
            className="h-10 w-10 inline-block"
          />
        </div>

        <div
          ref={Hblandas}
          className="bg-slate-950 bg-opacity-70 border border-white rounded-md mt-8">


          <div className={`grid opacity-0 md:grid-cols-2 items-center p-8 gap-5 ${initialBlandas && 'opacity-100  animate-none md:animate-fade-left animate-once animate-duration-[2000ms] animate-delay-0'}`}

          >

            <h2 className="text-4xl text-center font-semibold md:text-left"> Estas son mis Habilidades Blandas.</h2>

            <div className="p-1">

              <ul className="grid lg:grid-cols-2 gap-4">
                {blandas.map(blanda => {

                  return (
                    <li key={blanda.habilidad}

                    >
                      <div className="mx-auto w-full">
                        <div className="flex justify-center w-full h-full p-3 bg-blue-500 hover:bg-blue-800 transition-colors hover:border-slate-400 border-white border-2 rounded-md ">
                          <p className="font-semibold">{blanda.habilidad}</p>
                        </div>
                      </div>

                    </li>

                  )
                })}

              </ul>
            </div>

          </div>


          <div
            ref={Hduras}
            className={`grid md:grid-cols-2 items-center p-8 gap-5 opacity-0 ${initialDuras && 'opacity-100 md:animate-fade-right  animate-none animate-once animate-duration-[2000ms] animate-delay-0'}`}

          >

            <h2 className="text-4xl text-center font-semibold md:text-left "> Estas son las tecnologías que he utilizado en diversos proyectos.</h2>

            <div className="p-1">

              <div className="grid md:grid-cols-4 place-items-center grid-cols-3 lg:grid-cols-4 gap-4">
                {duras.map(dura => {

                  return (

                    <img src={`img/${dura.tecnologia}.svg`}

                      className="border transition-all border-white p-3 md:hover:p-2 rounded-md md:hover:animate-wiggle animate-infinite animate-duration-950 bg-slate-700 animate-delay-0"
                      alt={dura.tecnologia}
                      loading="lazy"
                      width={70}
                      height={70}

                    />
                  )
                })}

              </div>
            </div>

          </div>
        </div>


      </div>





    </section>
  )
}
