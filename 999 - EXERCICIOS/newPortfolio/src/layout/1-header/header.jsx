import styles from "./header.module.scss"
import { Github, Linkedin } from 'react-bootstrap-icons'; 

/* 
Falta uns detalhes no menu
O estilo geral não esta sendo aplicados nos elementos com {styles}
*/

export default function Header() {
    return (
        <header id={styles.headerHome}>
            <h1 id={styles.logo}>
                {/* detalhe */}
                <span className={styles.spanAzulMarinho}>&lt; / D</span>EV &gt;
            </h1>

            {/* Navbar para tela quandes */}
            <nav id={styles.navbar}>
                {/* <Envelope color="blue" size={32} /> */}
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
            <input type="checkbox" name="check-menu" id="check-menu" />
            <menu id={styles.hamburguer}>
                <label htmlFor="check-menu">
                    <div id={styles.menu} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div className={styles.tracos} id={styles.tracoOne}></div>
                        <div className={styles.tracos} id={styles.tracoTwo}></div>
                        <div className={styles.tracos} id={styles.tracoThree}></div>
                    </div>
                </label>
                
                <div className="container-fluid" id={styles.containerFluid}>
                    <div className="offcanvas offcanvas-end bg-transparent w-100" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                        <div id={styles.offcanvasNavbar}>
                            <div className="offcanvas-header mx-5">
                                <h1 className="offcanvas-title" id="offcanvasNavbarLabel">&lt; MENU / &gt;</h1>
                            </div>
                            <div className="offcanvas-body" id={styles.offcanvasBody}>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btnPersonalizado itensMenu" href="#sobre-mim">Sobre Mim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btnPersonalizado itensMenu" href="#habilidades">Habilidades</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btnPersonalizado" id={styles.itensMenu} href="#ancora-projetos">Projetos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btnPersonalizado itensMenu" href="#vamos-trabalhar-juntos">Iniciar um conversa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-light btnPersonalizado itensMenu" href="#contatos">contatos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-danger btnPersonalizado itensMenu" href="https://github.com/ramon-rodrigues-001" target="_blank">GITHUB</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-danger btnPersonalizado itensMenu" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">LINKEDIN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </menu>
             {/* / Menu hamburguer */}


            <div>
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://github.com/ramon-rodrigues-001/" target="_blank" id={styles.butaoRepositorios}>
                    <Github/>
                </a>
                <a className="btn btn-outline-info btnPersonalizado me-2" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank" id={styles.butaoRepositorios}>
                    <Linkedin/>
                </a>
            </div>
        </header>
    )
}