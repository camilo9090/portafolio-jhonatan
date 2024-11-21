
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import { projects } from "../data/data";
import { useInView } from "react-intersection-observer";
export default function Projects() {

  const { ref: titleProjects, inView: initialProject } = useInView({

    triggerOnce: true,
    initialInView: false
  });

  const { ref: ContentProjects, inView: initialContent } = useInView({

    triggerOnce: true,
    initialInView: false
  });
  return (
    <section id="projects">

      <div className="relative h-full w-full py-10 "
        style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}

      >

        <section className="px-3 mx-auto">
          <div className="max-w-xl md:max-w-6xl mx-auto  ">


            <div
              ref={titleProjects}
              id="proyectos"
              className={`flex text-4xl opacity-0 justify-center gap-3 mb-10 ${initialProject&&'opacity-100 md:animate-fade-down animate-none md:animate-once md:animate-ease-in md:animate-normal'}`}>

              <h2 className="font-black"> Proyectos</h2>

              <BriefcaseIcon
                className="h-10 w-10 inline-block" />
            </div>


            <div 
            ref={ContentProjects}
            className={`grid opacity-0 md:grid-cols-2 lg:grid-cols-3 w-auto items-start  gap-5 ${initialContent&&'opacity-100 md:animate-fade-left animate-none md:animate-once md:animate-ease-in md:animate-normal'}`}>


              {
                projects.map(project => (


                  <Card
                    key={project.nombre}
                    project={project}

                  />
                ))
              }

            </div>

          </div>
        </section>


      </div>





    </section>
  )
}
