import React, { Fragment } from 'react'

export default function Header() {
    return (
        <Fragment>
            <header id="header-home">
                <h1 id="logo"><span class="span-LetraVermelha">PORT</span>FOLIO</h1>

                <nav id="navbar">
                    <a href="#sobre-mim">SOBRE MIM</a>
                    <a href="#habilidades">HABILIDADES</a>
                    <a href="#projetos">PROJETOS</a>
                    <a href="#contatos">CONTATOS</a>
                </nav>
            
                {/* <input type="checkbox" name="check-menu" id="check-menu"> */}
                <menu id="hamburguer">
                    <label for="check-menu">
                        <div id="menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <div class="tracos" id="traco-1"></div>
                            <div class="tracos" id="traco-2"></div>
                            <div class="tracos" id="traco-3"></div>
                        </div>
                    </label>
                    
                    <div class="container-fluid">
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false">
                            <div class="offcanvas-header mx-5">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="btn btn-outline-light itens_menu" href="#sobre-mim">Sobre Mim</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn btn-outline-light itens_menu" href="#habilidades">Habilidades</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn btn-outline-light itens_menu" href="#projetos">Projetos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn btn-outline-light itens_menu" href="#contatos">contatos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn btn-outline-danger itens_menu" href="https://github.com/ramon-rodrigues-001" target="_blank">GITHUB</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn btn-outline-danger itens_menu" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">LINKEDIN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </menu>
                

                <a class="btn btn-outline-danger me-2" href="https://github.com/ramon-rodrigues-001/Portifolio" target="_blank" id="butao-github"><i class="bi bi-github"></i>  GITHUB</a>
            </header>
        </Fragment>
    )
}