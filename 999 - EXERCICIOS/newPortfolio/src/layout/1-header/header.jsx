import styles from "./header.module.scss"
import { Github, Linkedin, MoonStarsFill, BrightnessHighFill } from 'react-bootstrap-icons';
// import './node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from "react"; 

/*  
Falta uns detalhes no menu
O estilo geral não esta sendo aplicados nos elementos com {styles}
*/

export default function Header(props) {
    const { tema, mudarTema } = props

    return (
        <header className={styles.header_Home} 
        id={`${tema === 'Light' ? styles.Light : styles.Dark}`}>
            <div className={styles.container_Header}>
                <h1 id={styles.logo}>
                    {/* detalhe */}
                    <span className={styles.span_Azul_Marinho}>&lt; / D</span>EV &gt;
                </h1>
                {/* Navbar para tela quandes */}
                <nav id={styles.navbar}>
                    <a href="#ancora-sobre-mim">
                        <span className={styles.aspas_Navbar}>&lt; </span>
                            SOBRE MIM
                        <span className={styles.aspas_Navbar}> &gt;</span>
                    </a>
                    <a href="#ancora-habilidades">
                        <span className={styles.aspas_Navbar}>&lt; </span>
                            HABILIDADES
                        <span className={styles.aspas_Navbar}> &gt;</span>
                    </a>
                    <a href="#ancora-projetos">
                        <span className={styles.aspas_Navbar}>&lt; </span>
                            PROJETOS
                        <span className={styles.aspas_Navbar}> &gt;</span>
                    </a>
                    <a href="#ancora-contatos">
                        <span className={styles.aspas_Navbar}>&lt; </span>
                            CONTATOS
                        <span className={styles.aspas_Navbar}> &gt;</span>
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
                
                    <div className="container-fluid" id={styles.container_Fluid}>
                        <div className="offcanvas offcanvas-end bg-transparent w-100" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                            <div id={styles.offcanvas_Navbar}>
                                <div className="offcanvas-body" id={styles.offcanvas_Body}>
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <buton className="btn btn-outline-light btnPersonalizado" id={styles.itens_Menu} onClick={mudarTema}>
                                                Mudar Tema <MoonStarsFill/>
                                            </buton>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light btnPersonalizado" id={styles.itens_Menu} href="#ancora-sobre-mim">Sobre Mim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light btnPersonalizado" id={styles.itens_Menu} href="#ancora-habilidades">Habilidades</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light btnPersonalizado" id={styles.itens_Menu} href="#ancora-projetos">Projetos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light btnPersonalizado" id={styles.itens_Menu} href="#ancora-contatos">contatos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-danger btnPersonalizado" id={styles.itens_Menu} href="https://github.com/ramon-rodrigues-001" target="_blank">GITHUB</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-danger btnPersonalizado" id={styles.itens_Menu} href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">LINKEDIN</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </menu>
                 {/* / Menu hamburguer */}
                <div>
                    <a className="btn btn-outline-info me-2" href="https://github.com/ramon-rodrigues-001/" target="_blank" id={styles.butao_Repositorios}>
                        <Github/>
                    </a>
                    <a className="btn btn-outline-info me-2" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank" id={styles.butao_Repositorios}>
                        <Linkedin/>
                    </a>
                    <button onClick={mudarTema} className="btn btn-outline-info me-2" id={styles.butao_Repositorios}>
                        {tema === 'Dark' ? <MoonStarsFill/> : <BrightnessHighFill/>}
                    </button>
                </div>
            </div>
        </header>
    )
}