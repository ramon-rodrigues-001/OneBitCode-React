import React, { Fragment } from "react";

 
// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [Sobre Mim]
function mudar_text_btn_sobremim() {
    let a_sobreMim = document.querySelector('a#btn-mais-sobreMim')
    let input_sobreMim = document.querySelector('#mais-sobreMim')

    if (input_sobreMim.checked == false) {
        a_sobreMim.innerText = "MOSTRAR MENOS"
    }
    else if (input_sobreMim.checked == true) {
        a_sobreMim.innerText = "MOSTRAR MAIS"
    }
}


export default function SobreMim() {
    return (
        <section id="sobre-mim">
            <div data-aos="zoom-in" id="div-animação-header"> 
            {/* DIV BIBLIOTECA ANIMAÇÃO */}
                <div id="sm-esquerda" className="img-flutuante">
                    <img id="img-flutuante" src="../public/img/Preferida.jpg" alt="Foto minha" />
                </div>
                <input type="checkbox" name="mais-sobreMim" id="mais-sobreMim"/>
                <div id="sm-direita">
                    <h2 className="h1"> <span className="span-LetraVermelha">Sobre</span> Mim</h2>
                    <p id="texto">Oi eu sou o Ramon, um desenvolvedor web front-end de 18 anos que começou a estudar programação em 10/01/2022. 
                    <span id="texto-descartavel-1">
                        Sou apaixonado por tecnologia e adoro trabalhar no ambiente de front-end, pois acredito que o desenvolvimento web pode criar experiências incríveis para os usuários e ajudar as empresas a alcançarem seus objetivos. 
                        <span id="texto-descartavel-2">
                            Conheci a programação através do canal do curso em vídeo e depois comprei meu primeiro curso profissionalizante da OneBitCode, onde aprendi Sass, Bootstrap, Javascript, Typescript e muito mais. Estou animado para buscar novas oportunidades e expandir minhas habilidades para crescer profissionalmente.
                        </span>
                    </span></p>
                </div>
                <label htmlFor="mais-sobreMim" id="label-mais-sobreMim">
                    <a className="btn btn-outline-danger" id="btn-mais-sobreMim" onClick={mudar_text_btn_sobremim}>MOSTRAR MAIS</a>
                </label>
            </div>
        </section>
    )
}
