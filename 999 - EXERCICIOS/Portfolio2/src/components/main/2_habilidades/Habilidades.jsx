import React from "react";


// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [HABILIDADES]
function mudar_text_btn_habilidades() {
    let a_habilidades = document.querySelector('a#btn-mais-habilidades')
    let input_habilidades = document.querySelector('input#mais-habilidades')

    if (input_habilidades.checked == false) {
        a_habilidades.innerText = "MOSTRAR MENOS"
    }
    else if (input_habilidades.checked == true) {
        a_habilidades.innerText = "MOSTRAR MAIS"
    }
}


export default function Habilidades(props) {
    return (
        <section id="habilidades">
            <div data-aos="zoom-in" id="div_animation">  {/* DIV BIBLIOTECA ANIMAÇÃO */}
                <h2 className="h1 text-center" id="inicio">
                    <span className="span-LetraVermelha">Habilid</span>ades
                </h2>
                <input type="checkbox" name="input-habilidades" id="mais-habilidades" />
                <div id="conteiner-cards">
                    <a href="#habilidades" className="cards" id="h1">
                        <h3 className="title-ability">HTML5</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" className="cards impar" id="h2">
                        <h3 className="title-ability">CSS</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" className="cards" id="h3">
                        <h3 className="title-ability">JAVASCRIPT</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" className="cards" id="h4">
                        <h3 className="title-ability">SASS</h3>
                        <p className="h5 px-2">Basico</p>
                    </a>
                    <a href="#habilidades" className="cards habilidade-descartavel impar" id="h5">
                        <h3 className="title-ability">BOOTSTRAP</h3>
                        <p className="h5 px-2">Basico</p>
                    </a>
                    <a href="#habilidades" className="cards habilidade-descartavel" id="h6">
                        <h3 className="title-ability">PYTHON</h3>
                        <p className="h5 px-2">Iniciante</p>
                    </a>
                    <a href="#habilidades" className="cards habilidade-descartavel" id="h7">
                        <h3 className="title-ability">GIT</h3>
                        <p className="h5 px-2">Iniciante</p>
                    </a>
                    <a href="#habilidades" className="cards habilidade-descartavel impar" id="h8">
                        <h3 className="title-ability">TYPESCRIPT</h3>
                        <p className="h5 px-2">Pretendo Em Breve</p>
                    </a>
                    <a href="#habilidades" className="cards habilidade-descartavel" id="h9">
                        <h3 className="title-ability">BULMA</h3>
                        <p className="h5 px-2">Pretendo Em Breve</p>
                    </a>
                    
                    {/* Butão ligado ou input checkbox das habilidades */}
                    <label htmlFor="mais-habilidades">
                        <a className="btn btn-outline-danger" id="btn-mais-habilidades" onClick={mudar_text_btn_habilidades}>MOSTRAR MAIS</a>
                    </label>
                </div>
                <div className="container" id="conteiner-resposta-abilidade">
                    <h2 id="titliInicial">Click em uma habilidade!</h2>
                    <p id="paragrafInicial"></p>
                </div>
            </div>
        </section>
    )
}
