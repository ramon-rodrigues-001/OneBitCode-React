import React from "react";
import { clicarEmCards } from "../../../../portifolio/javascript/text-habilidades";


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
                    <a href="#habilidades" onClick={clicarEmCards} className="cards" id="h1">
                        <h3 className="title-ability">HTML5</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards impar" id="h2">
                        <h3 className="title-ability">CSS</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards" id="h3">
                        <h3 className="title-ability">JAVASCRIPT</h3>
                        <p className="h5 px-2">Avançado</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards" id="h4">
                        <h3 className="title-ability">SASS</h3>
                        <p className="h5 px-2">Basico</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards habilidade-descartavel impar" id="h5">
                        <h3 className="title-ability">BOOTSTRAP</h3>
                        <p className="h5 px-2">Basico</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards habilidade-descartavel" id="h6">
                        <h3 className="title-ability">PYTHON</h3>
                        <p className="h5 px-2">Iniciante</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards habilidade-descartavel" id="h7">
                        <h3 className="title-ability">GIT</h3>
                        <p className="h5 px-2">Iniciante</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards habilidade-descartavel impar" id="h8">
                        <h3 className="title-ability">TYPESCRIPT</h3>
                        <p className="h5 px-2">Pretendo Em Breve</p>
                    </a>
                    <a href="#habilidades" onClick={clicarEmCards} className="cards habilidade-descartavel" id="h9">
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




// ======== MOSTAR TEXTO DE CADA HABILIDADES [Switch]  ========
export const clicarEmCards = function (ev) {

    const h1Inicial = document.querySelector('#titliInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(h1Inicial)
    const paragrafInicial = document.querySelector('#paragrafInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(paragrafInicial)
    
    let elemento = ev.currentTarget

    switch (elemento.id) {
        case 'h1':
            html()
            break
        case 'h2':
            css()
            break
        case 'h3':
            javascript()
            break
        case 'h4':
            sass()
            break
        case 'h5':
            bootstrap()
            break
        case 'h6':
            python()
            break
        case 'h7':
            git()
            break
        case 'h8':
            typescript()
            break
        case 'h9':
            bulma()
            break
    }
}

const text = document.querySelector('#text-resposta')

function html() {
    criar('HTML5', 'O esqueleto do projeto blablabla Facil para dedeu')
}
function css() {
    criar('CSS', 'Esse vai dar uma boa dor de cabeça kkkk, Brincadeira CSS é a melhor parte.')
}
function javascript() {
    criar('JavaScript', 'Estou nesmo momento estudando javascript, afinal não tem fim, estou a todo momento estarei estudando essa linguagem incrivel')
}
function sass() {
    criar('Sass', 'Que feramenta massa, estilizar fica muito mais intuitiva com ela')
}
function bootstrap() {
    criar('Bootstrap', 'Ao')
}
function python() {
    criar('Python', 'AAah Python, a primeira linguagem de programação a qual tive contato passei muito tempo nesta linguagem aprendendo basicamente logica, as vezes volto e dou uma praticadinha, mais não é mais meu foco')
}
function git() {
    criar('Git')
}
function typescript() {
    criar('TypeScript')
}
function bulma() {
    criar('bulma')
}


function criar(title, text) {
    const containerDeTexto = document.querySelector('#conteiner-resposta-abilidade')

    const h1 = document.createElement('h2')
    h1.innerText = title
    h1.id = 'titliInicial'
    h1.dataset.aos = 'flip-right'

    const p = document. createElement('p')
    p.innerText = text
    p.id = 'paragrafInicial'
    p.dataset.aos = 'flip-right'

    containerDeTexto.append(h1, p)
}