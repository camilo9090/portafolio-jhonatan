

export default function Header() {
  return (



    <header className="">
      {/* navegacion */}
      <div className="relative min-h-screen">

        <nav className="menu hidden sm:flex sm:justify-center md:justify-center lg:justify-end gap-5 items-center p-4  w-full fixed top-0">

          <a href="">Sobre Mí</a>
          <a href="">Estudios</a>
          <a href="">Habilidades</a>
          <a href="">Proyectos</a>

        </nav>
      </div>

    </header>
  )
}
