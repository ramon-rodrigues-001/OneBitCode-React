import React, { Fragment } from 'react'

export default function Header() {
    return (
        <header id="header-home">
            <h1 id="logo"><span className="span-LetraVermelha">PORT</span>FOLIO</h1>

            <nav id="navbar">
                <a href="#sobre-mim">SOBRE MIM</a>
                <a href="#habilidades">HABILIDADES</a>
                <a href="#projetos">PROJETOS</a>
                <a href="#contatos">CONTATOS</a>
            </nav>
        
            <input type="checkbox" name="check-menu" id="check-menu" />
            <menu id="hamburguer">
                <label htmlFor="check-menu">
                    <div id="menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div className="tracos" id="traco-1"></div>
                        <div className="tracos" id="traco-2"></div>
                        <div className="tracos" id="traco-3"></div>
                    </div>
                </label>
                
                <div className="container-fluid">
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                        <div className="offcanvas-header mx-5">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="btn btn-outline-light itens_menu" href="#sobre-mim">Sobre Mim</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light itens_menu" href="#habilidades">Habilidades</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light itens_menu" href="#projetos">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light itens_menu" href="#contatos">contatos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-danger itens_menu" href="https://github.com/ramon-rodrigues-001" target="_blank">GITHUB</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-danger itens_menu" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">LINKEDIN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </menu>
            

            <a className="btn btn-outline-danger me-2" href="https://github.com/ramon-rodrigues-001/Portifolio" target="_blank" id="butao-github"><i className="bi bi-github"></i>  GITHUB</a>
        </header>
    )
}