
import { blandasType, durasType, projectsType } from '../types'


export const blandas: blandasType[] = [
  {
    habilidad: "Honestidad",
  },
  {
    habilidad: "Respeto",
  },
  {
    habilidad: "Adaptabilidad",
  },
  {
    habilidad: "Pensamiento Crítico",
  },
  {
    habilidad: "Trabajo en Equipo",
  },
  {
    habilidad: "Empatía",
  },
];

export const duras: durasType[] = [
  {
    tecnologia: "html",
  },
  {
    tecnologia: "css",
  },
  {
    tecnologia: "sass",
  },
  {
    tecnologia: "tailwind",
  },
  {
    tecnologia: "java",
  },
  {
    tecnologia: "php",
  },
  {
    tecnologia: "javascript",
  },
  {
    tecnologia: "typescript",
  },
  {
    tecnologia: "react",
  },

  {
    tecnologia: "mysql",
  },


  {
    tecnologia: "github",
  },
  {
    tecnologia: "git",
  },
];

export const projects: projectsType[] = [



  {
    nombre: "portafolio",
    url: "#",
    repositorio: "https://github.com/camilo9090/portafolio-jhonatan",
    descripcion: `Este proyecto consiste en un portafolio
     desarrollado con diversas tecnologías,
     diseñado para poner a prueba los conocimientos adquiridos en React, 
     TypeScript, entre otras herramientas.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "portafolio",
  },
  {
    nombre: "gastos",
    url: "https://swipe-gastos.netlify.app/",
    repositorio: "https://github.com/camilo9090/workReact5",
    descripcion: `Aplicación Web que funciona como planificador de presupuesto,
    permite llevar un control de los gastos utilzando Context API para utilizar
    un estado global.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "typescript", color: "emerald" },
    ],
    img: "gastos",
  },

  {
    nombre: " Propinas y Consumo",
    url: "https://lustrous-tulumba-c76ee5.netlify.app/",
    repositorio: "https://github.com/camilo9090/workReact3",
    descripcion: `Aplicación Web que funciona como una calculadora de propinas y de consumo de alimentos.`,
    tecnologias: [
      { nombre: "react", color: "gray" },
      { nombre: "tailwind", color: "violet" },
      { nombre: "html", color: "emerald" },
    ],
    img: "gastos1",
  }


]; 