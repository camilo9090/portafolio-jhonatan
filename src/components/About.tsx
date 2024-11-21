
import { useInView } from "react-intersection-observer"


export default function () {


    const { ref: aboutme, inView: initialInView } = useInView({


        triggerOnce: true,
        initialInView: false

    });
    return (




        <div className={`transition-opacity duration-500  flex items-center justify-center min-h-screen mt-5 `}>



            <section
                id="aboutme"
                ref={aboutme}
                className={`w-full max-w-4xl px-4 md:opacity-0 lg:pb-0 transition-all duration-600 ease-in-out ${initialInView && 'px-2 md:animate-fade-up md:animate-once md:animate-ease-in md:animate-normal pt-10 md:pt-16 p-10'}`}>
                <div className="rounded-lg bg-black bg-opacity-70 text-center p-8 shadow-lg border border-gray-300 "
                    style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}
                >
                    <h2 className="text-white text-4xl  font-black "


                    >Sobre Mí</h2>
                    <p className="mt-10 text-white text-2xl font-semibold">
                        Soy Desarrollador Front-End con experiencia en el desarrollo de soluciones basadas en
                        JavaScript, TypeScript y React. He trabajado con metodologías ágiles como Scrum y tengo
                        un fuerte deseo de adquirir nuevas experiencias y conocimientos que enriquezcan mi desarrollo
                        personal. Mis habilidades incluyen programación en JavaScript y TypeScript, así como el uso de
                        SASS, HTML y otros. Además, de tener conocimientos en diseño de experiencia de usuario (UX).
                    </p>
                </div>
            </section>


        </div>



    )
}
