const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-3" >
        <div className="container mx-auto flex justify-between items-center px-0 py--6">
          {/* Logo ou Nome */}
          <div className="flex items-center justify-end h-15  mb-1 ">
            <img
              className="h-20 w-20 rounded-full object-cover py--20"
              src="/logo.jpeg"
              alt="logo"
            />
          </div>
                    
          {/* Botão de alternância para menu responsivo */}
          <button
            className="block md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            <i className="fas fa-bars"></i>
          </button>
  
          {/* Navegação */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="hover:text-gray-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-300">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-300">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;