export type blandasType={

    habilidad:string
}

export type durasType={

    tecnologia:string
}

type tecnologiaType = {
    nombre: string;
    color: string;
  }

export type projectsType={

nombre:string
url:string
repositorio:string
descripcion:string
tecnologias:tecnologiaType[]
img:string
}