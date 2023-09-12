import { useEffect, useState } from "react"
import styles from "./habilidades.module.scss"


// RETIRAR OS ELEMENTOS DE ANimação 
export default function Habilidades(props) {
    const tema = props.tema
    const [maisHabilidades, setMaisHabilidades] = useState(true)
    const [paragrafHabilit, setParagrafHabilit] = useState("")
    const [titleHabilit, setTitleHabilit] = useState("")
    

    useEffect(() => {
        let mediaQuery = window.innerWidth
    
        if (mediaQuery < 560) {
            setMaisHabilidades(false)
        }
        else if (mediaQuery > 560) {
            setMaisHabilidades(true)
        }
    }, [window.innerWidth]);

    const mudarStateHabilidade = () => {
        if (maisHabilidades === true) {
            setMaisHabilidades(false)
        }
        else if (maisHabilidades === false) {
            setMaisHabilidades(true)
        }
    }




    const hab_1 = () => {
        setTitleHabilit("HTML")
        setParagrafHabilit("O esqueleto do projeto é o que dá a base para o desenvolvimento da aplicação. Com boas práticas é possível criar um projeto consistente e padronizado, isso torna a aplicação mais fácil de ser entendida e mantida no futuro, além de garantir uma melhor experiência para o usuário final.")
    }
    const hab_2 = () => {
        setTitleHabilit("CSS")
        setParagrafHabilit("(Cascading Style Sheets) é uma linguagem que define o estilo e a aparência de elementos em páginas web HTML.. deixando o site atraente, ainda mais com sua exteção o SASS")
    }
    const hab_3 = () => {
        setTitleHabilit("JAVASCRIPT")
        setParagrafHabilit("(JS) esta é força motriz por trás da magia interativa na web, capacitando páginas a ganharem vida com animações deslumbrantes, validação de formulários instantânea e dinamismo que cativa os visitantes. É a ferramenta essencial para transformar ideias em experiências cativantes e envolventes na internet.")
    }
    const hab_4 = () => {
        setTitleHabilit("SASS")
        setParagrafHabilit("O SASS é uma ferramenta verdadeiramente impressionante! Ao viabilizar a criação de folhas de estilo altamente organizadas e de fácil manutenção, ele encurta consideravelmente o tempo e esforço exigidos para efetuar alterações e atualizações, resultando em um fluxo de trabalho mais eficiente e menos complicado.")
    }
    const hab_5 = () => {
        setTitleHabilit("BOOTSTRAP")
        setParagrafHabilit("Esta ferramneta busca agilizar o processo de criação de interfaces web, tornando-o mais eficiente, produtivo e consistente.")
    }
    const hab_6 = () => {
        setTitleHabilit("REACT")
        setParagrafHabilit("Iniciei recentemente os estudos em React, após ter concluído o curso avançado de JavaScript da OneBitCode. A proposta dessa tecnologia é incrível e considero que seja o próximo passo para aperfeiçoar meus conhecimentos. Dessa forma, pretendo refazer meus projetos utilizando essa ferramenta poderosa.")
    }
    const hab_7 = () => {
        setTitleHabilit("MONGO.DB")
        setParagrafHabilit("MongoDB, meu primeiro banco de dados estudado, é uma poderosa plataforma NoSQL orientada a documentos, oferecendo flexibilidade única, escalabilidade e capacidade de lidar com estruturas de dados variáveis, tornando-o uma escolha moderna para aplicações adaptáveis e eficientes de gerenciamento de dados.")
    }
    const hab_8 = () => {
        setTitleHabilit("NODE.JS")
        setParagrafHabilit("Node.js revolucionou o uso do JavaScript ao possibilitar a criação de servidores escaláveis e aplicações de alto desempenho, com arquitetura baseada em eventos para serviços web rápidos e em tempo real.")
    }



    return (
        <span id="ancora-habilidades">
        <section className={styles.habilidades} id={tema == 'Light' ? styles.temaLight : null}>
            <div className={styles.container_habilidades}>
                <div> {/* Colocar a animação aqui */}

                    <p className={styles.subTitle} id="inicio">Habilidades</p>
                    <h3 className={styles.title}>Tecnologias que utilizo</h3>

                    {/* Cards De Habilidade */}
                    <div id={styles.conteiner_cards}>
                        <div className={styles.cards} onClick={hab_1}>
                            <span>
                                <img src="/icon-habilits/html5-plain.svg" className={styles.iconHabilits} alt="icon_HTML_5" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">HTML</p>
                            </span>
                        </div>
                        <div className={styles.cards} onClick={hab_2}>
                            <span>
                                <img src="/icon-habilits/css3-plain.svg" className={styles.iconHabilits} alt="icon_CSS_3" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">CSS</p>
                            </span>
                        </div>
                        <div className={styles.cards} onClick={hab_3}>
                            <span>
                                <img src="/icon-habilits/javascript-plain.svg" className={styles.iconHabilits} alt="icon_JS" />
                                <h3 className="title_ability"></h3>
                                <p className="h5 px-1">JAVASCRIPT</p>
                            </span>
                        </div>
                        <div className={styles.cards} onClick={hab_4}>
                            <span>
                                <img src="/icon-habilits/sass-original.svg" className={styles.iconHabilits} alt="icon_SASS" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">SASS</p>
                            </span>
                        </div>

                        {/* Baililidades que somem na tela pequena */}
                        {maisHabilidades && (
                            <div className={styles.cards} onClick={hab_5}>
                                <span>
                                    <img src="/icon-habilits/bootstrap-plain.svg" className={styles.iconHabilits} alt="icon_BOOTSTRAP" />
                                    <h3 className={styles.title_ability}></h3>
                                    <p className="h5 px-1">BOOTS...</p>
                                </span>
                            </div>
                        )}
                        {maisHabilidades && (
                            <div className={styles.cards} onClick={hab_6}>
                                <span>
                                    <img src="/icone-habilidades/react.png" className={styles.iconHabilits} alt="icon_REACT" />
                                    <h3 className={styles.title_ability}></h3>
                                    <p className="h5 px-1">REACT</p>
                                </span>
                            </div>
                        )}
                        {maisHabilidades && (
                            <div className={styles.cards} onClick={hab_7}>
                                <span>
                                    <img src="/icon-habilits/mongodb-plain.svg" className={styles.iconHabilits} alt="icon_mongoDB" />
                                    <h3 className={styles.title_ability}></h3>
                                    <p className="h5 px-1">MONGO.DB</p>
                                </span>
                            </div>
                        )}
                        {maisHabilidades && (
                            <div className={styles.cards} onClick={hab_8}>
                                <span>
                                    <img src="/icon-habilits/nodejs-plain.svg" className={styles.iconHabilits} alt="icon_NodeJs" />
                                    <h3 className={styles.title_ability}></h3>
                                    <p className="h5 px-1">NODE.JS</p>
                                </span>
                            </div>
                        )}

                        
                
                        {/* Butão de ver mais / menos */}
                        <label htmlFor="mais-habilidades" id="ancoraParaDescrition">
                            {/* Mostrar MENOS */}
                            {maisHabilidades && (
                                <button className="btn btn-outline-info btnPersonalizado" id={styles.btn_mais_habilidades} onClick={mudarStateHabilidade}>
                                    <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.setaBTN} id={styles.setaMostrarMenos}/>
                                    VER MENOS
                                    <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.setaBTN} id={styles.setaMostrarMenos}/>
                                </button>
                            )}
                            {/* Mostrar Mais */}
                            {!maisHabilidades && (
                                <button className="btn btn-outline-info btnPersonalizado" id={styles.btn_mais_habilidades} onClick={mudarStateHabilidade}>
                                    <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.setaBTN}/>
                                    VER MAIS
                                    <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.setaBTN}/>
                                </button>
                            )}
                        </label>
                    </div>


                    {/* Descrição das habilidades */}
                    <div className="container" id={styles.conteiner_resposta_abilidade}>
                        <h5 id="titliInicial">
                            {titleHabilit === '' ? "Click em uma habilidade!" : titleHabilit}
                        </h5>
                        <p id="paragrafInicial">
                            {paragrafHabilit === '' ? null : paragrafHabilit}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </span>
    )
}