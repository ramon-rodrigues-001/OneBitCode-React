
export default function Header() {
    return (
        <header id="header-home">
            <h1 id="logo"><span className="span-azulMarinho">&lt; / D</span>EV &gt;</h1>

            {/* Navbar para tela quandes */}
            <nav id="navbar">
                <a href="#sobre-mim">
                    <span className="aspas-navbar">&lt; </span>
                        SOBRE MIM
                    <span className="aspas-navbar"> &gt;</span>
                </a>
                <a href="#habilidades">
                    <span className="aspas-navbar">&lt; </span>
                        HABILIDADES
                    <span className="aspas-navbar"> &gt;</span>
                </a>
                <a href="#ancora-projetos">
                    <span className="aspas-navbar">&lt; </span>
                        PROJETOS
                    <span className="aspas-navbar"> &gt;</span>
                </a>
                <a href="#contatos">
                    <span className="aspas-navbar">&lt; </span>
                        CONTATOS
                    <span className="aspas-navbar"> &gt;</span>
                </a>
            </nav>
            {/* / Navbar para tela quandes */}
            
            {/* Navbar menu hamburguer tela peguena até 650px */}
            <input type="checkbox" name="check-menu" id="check-menu" />
            <menu id="hamburguer">
                <label for="check-menu">
                    <div id="menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div className="tracos" id="traco-1"></div>
                        <div className="tracos" id="traco-2"></div>
                        <div className="tracos" id="traco-3"></div>
                    </div>
                </label>
                
                <div className="container-fluid">
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                        <div className="offcanvas-header mx-5">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">&lt; DEV / &gt;</h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="btn btn-outline-light btnPersonalizado itens_menu" href="#sobre-mim">Sobre Mim</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light btnPersonalizado itens_menu" href="#habilidades">Habilidades</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light btnPersonalizado itens_menu" href="#ancora-projetos">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light btnPersonalizado itens_menu" href="#vamos-trabalhar-juntos">Iniciar um conversa</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light btnPersonalizado itens_menu" href="#contatos">contatos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-danger btnPersonalizado itens_menu" href="https://github.com/ramon-rodrigues-001" target="_blank">GITHUB</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-danger btnPersonalizado itens_menu" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">LINKEDIN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </menu>
             {/* / Menu hamburguer */}
            

            <div>
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://github.com/ramon-rodrigues-001/" target="_blank" id="butao-github"><i className="bi bi-github"></i></a>
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank" id="butao-github"><i className="bi bi-linkedin"></i></a>
            </div>
        </header>
    )
}