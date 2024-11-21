
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import { projects } from "../data/data";
export default function Projects() {


  return (
    <section id="projects">

      <div className="relative h-full w-full py-10 "
        style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}

      >

        <section className="px-3 mx-auto">
          <div className="max-w-xl md:max-w-6xl mx-auto  ">


            <div
              id="proyectos"
              className={`flex text-4xl justify-center gap-3 mb-10`}>

              <h2 className="font-black"> Proyectos</h2>

              <BriefcaseIcon
                className="h-10 w-10 inline-block" />
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-auto items-start  gap-5 ">


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
