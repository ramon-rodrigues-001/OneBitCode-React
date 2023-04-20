import React, { Fragment } from "react";

export default function SobreMim() {
    return (
        <Fragment>
            <section  id="sobre-mim">
                <div data-aos="zoom-in" id="div-animação-header"> 
                {/* DIV BIBLIOTECA ANIMAÇÃO */}
                    <div id="sm-esquerda" class="img-flutuante">
                        <img id="img-flutuante" src="../public/img/Preferida.jpg" alt="Foto minha" />
                    </div>
                    <input type="checkbox" name="mais-sobreMim" id="mais-sobreMim"/>
                    <div  id="sm-direita">
                        <h2 class="h1"> <span class="span-LetraVermelha">Sobre</span> Mim</h2>
                        <p id="texto">Oi eu sou o Ramon, um desenvolvedor web front-end de 18 anos que começou a estudar programação em 10/01/2022. 
                        <span id="texto-descartavel-1">
                            Sou apaixonado por tecnologia e adoro trabalhar no ambiente de front-end, pois acredito que o desenvolvimento web pode criar experiências incríveis para os usuários e ajudar as empresas a alcançarem seus objetivos. 
                            <span id="texto-descartavel-2">
                                Conheci a programação através do canal do curso em vídeo e depois comprei meu primeiro curso profissionalizante da OneBitCode, onde aprendi Sass, Bootstrap, Javascript, Typescript e muito mais. Estou animado para buscar novas oportunidades e expandir minhas habilidades para crescer profissionalmente.
                            </span>
                        </span></p>
                    </div>
                    <label for="mais-sobreMim" id="label-mais-sobreMim">
                        <a class="btn btn-outline-danger" id="btn-mais-sobreMim" onclick="mostrar_maisSobreMim()">MOSTRAR MAIS</a>
                    </label>
                </div>
            </section>
        </Fragment>
    )
}