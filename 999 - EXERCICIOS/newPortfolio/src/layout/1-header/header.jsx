import styles from "./header.module.scss"


export default function Header() {
    return (
        <header id={styles.headerHome}>
            <h1 id={styles.logo}>
                {/* detalhe */}
                <span className={styles.spanAzulMarinho}>&lt; / D</span>EV &gt;
            </h1>

            {/* Navbar para tela quandes */}
            <nav id={styles.navbar}>
                <a href="#sobre-mim">
                    <span className={styles.aspasNavbar}>&lt; </span>
                        SOBRE MIM
                    <span className={styles.aspasNavbar}> &gt;</span>
                </a>
                <a href="#habilidades">
                    <span className={styles.aspasNavbar}>&lt; </span>
                        HABILIDADES
                    <span className={styles.aspasNavbar}> &gt;</span>
                </a>
                <a href="#ancora-projetos">
                    <span className={styles.aspasNavbar}>&lt; </span>
                        PROJETOS
                    <span className={styles.aspasNavbar}> &gt;</span>
                </a>
                <a href="#contatos">
                    <span className={styles.aspasNavbar}>&lt; </span>
                        CONTATOS
                    <span className={styles.aspasNavbar}> &gt;</span>
                </a>
            </nav>
            {/* / Navbar para tela quandes */}
            
            {/* Navbar menu hamburguer tela peguena até 650px */}
            {/* Detalhe */}
            <input type="checkbox" name="check-menu" id={styles.checkMenu} />
            <menu id={styles.hamburguer}>
                <label for="check-menu">
                    <div id={styles.menu} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div className={styles.tracos} id={styles.traco-1}></div>
                        <div className={styles.tracos} id={styles.traco-2}></div>
                        <div className={styles.tracos} id={styles.traco-3}></div>
                    </div>
                </label>
                
                <div className="container-fluid" id={styles.containerFluid}>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id={styles.offcanvasNavbar} aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                        <div className="offcanvas-header mx-5">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">&lt; DEV / &gt;</h5>
                        </div>
                        <div className="offcanvas-body" id={styles.offcanvasBody}>
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
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://github.com/ramon-rodrigues-001/" target="_blank" id={styles.butaoGithub}><i className="bi bi-github"></i></a>
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank" id={styles.butaoGithub}><i className="bi bi-linkedin"></i></a>
            </div>
        </header>
    )
}