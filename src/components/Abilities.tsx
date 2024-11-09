import { useState } from "react"
import { blandasType } from "../types"
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";


export default function Abilities() {


  const [data, setData] = useState<blandasType[]>()


  return (


    <section className="relative h-full w-full">


      <div className="flex justify-center text-4xl gap-3"
      style={{ textShadow: "2px 2px 5px rgba(0, 0, 255, 0.6)" }}
      
      > 


        <h1 className="font-black">Habilidades</h1>
        
        <PuzzlePieceIcon
        className="h-10 w-10"
        />
        </div>




    </section>
  )
}
