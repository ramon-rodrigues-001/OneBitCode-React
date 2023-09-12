import { useEffect, useState } from "react";
import styles from "./projetos.module.scss";

export default function Projeto(props) {
    const tema = props.tema
    const [mostraCards, setMostrarCards] = useState(false)
    const [titleProjeto, setTitleProjetos] = useState("Blizzard")
    const [descrition, setDescrition] = useState("Inspirado na página de jogos da Blizzard, este é considera por mim o meu projeto mais bonito sendo tambem o meu favorito, foi possível implementar soluções criativas e adaptá-las às necessidades do projeto. Tecnologias HTML, CSS, JavaScript, Sass e Bootstrap")
    const [imgFerramentas, setImgFerramentas] = useState(['html.png', 'css.png', 'javascript.png', 'sass.png', 'bootstrap.png'])


    // Iniciar um card do carrosel como Checked
    useEffect(()=> {
        const radio_1 = document.querySelector('#input-slider-2')
        radio_1.checked = true
    }, [])

    // Manitorar tamanho da tela e mudar State (mostraCards)
    useEffect(()=> {
        const larguraTela = window.innerWidth
        larguraTela < 800 ? setMostrarCards(true) : setMostrarCards(false)
    }, [window.innerWidth])


    const textoGogOfWar = ()=> {
        setTitleProjetos("God Of War")
        setDescrition("O projeto consiste em uma página de informações sobre o jogo 'God of War Ragnarök', que apresenta modo de jogar, personagens e trailer. Este projeto tem como foco o desenvolvimento da interfaçe não tendo um back-end robusto. Para a criação utilizei as tecnologias HTML, CSS, Sass, Bootstrap e JavaScript.")
        setImgFerramentas(['html.png', 'css.png', 'javascript.png', 'sass.png', 'bootstrap.png'])
    }
    const textoBlizzard = ()=> {
        setTitleProjetos("Blizzard")
        setDescrition("Inspirado na página de jogos da Blizzard, este é considera por mim o meu projeto mais bonito sendo tambem o meu favorito, foi possível implementar soluções criativas e adaptá-las às necessidades do projeto. Tecnologias HTML, CSS, JavaScript, Sass e Bootstrap")
        setImgFerramentas(['html.png', 'css.png', 'javascript.png', 'sass.png', 'bootstrap.png'])

    }
    const textoLivreLeitor = ()=> {
        setTitleProjetos("Leitor Livre")
        setDescrition("Este é o projeto mais grandioso que já empreendi, representando também a maior fonte de aprendizado e aprimoramento das minhas habilidades. Trata-se de um website dedicado a disponibilizar gratuitamente livros em formato PD")
        setImgFerramentas(['html.png', 'css.png', 'javascript.png', 'sass.png', 'bootstrap.png', 'react.png', 'npm.png'])
    }


    return (
        <span id="ancora-projetos">
        <section className={styles.projetos} id={tema == 'Light' ? styles.temaLigth : null}>
            <div className={styles.div_de_animation}> {/*  <!-- DIV BIBLIOTECA ANIMAÇÃO AQUI--> */}
                <p className={styles.subTitle}>Projetos</p>
                <h3 className={styles.title}>Top 3 Projetos</h3>

                {/* <!-- CARROSEL DE PROJETOS -->  ANIMAÇÂO AQUI TBM*/}
                <div id={styles.container_slider}>
                    <input type="radio" className={styles.input_slider_1} 
                    name="input-slider" id="input-slider-1" />
                    <input type="radio" className={styles.input_slider_2} 
                    name="input-slider" id="input-slider-2" />
                    <input type="radio" className={styles.input_slider_3} 
                    name="input-slider" id="input-slider-3" />

                    <div id={styles.cards}>
                        <label htmlFor="input-slider-1" id="label-1" onClick={textoGogOfWar}>
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_1}>
                                <img className={styles.imagensProjeto} src="/god-of-war-tela.jpg" alt="projeto-GodOfWar" />
                                
                                <div className={styles.containerDeBTN}>
                                    <a href="https://ramon-rodrigues-001.github.io/God-Of-War/" target="_blank" className="btn btnPersonalizado" id={styles.deploy}><span className="detalhes-btn quadrado_1"></span>
                                        DEPLOY
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                    <a href="https://github.com/ramon-rodrigues-001/God-Of-War" target="_blank" className="btn btnPersonalizado" id={styles.github}><span className="detalhes-btn quadrado_1"></span>
                                        GITHUB
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="input-slider-2" id="label-2" onClick={textoBlizzard}>
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_2}>
                                <img className={styles.imagensProjeto} src="/projeto-blizzard.webp" />

                                <div className={styles.containerDeBTN}>
                                    <a href="https://ramon-rodrigues-001.github.io/Games-Blizzard/" target="_blank" className="btn btnPersonalizado" id={styles.deploy}><span className="detalhes-btn quadrado_1"></span>
                                        DEPLOY
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                    <a href="https://github.com/ramon-rodrigues-001/Games-Blizzard" target="_blank" className="btn btnPersonalizado" id={styles.github}><span className="detalhes-btn quadrado_1"></span>
                                        GITHUB
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                </div>
                            </div>
                        </label>
                        
                        <label htmlFor="input-slider-3" id="label-3" onClick={textoLivreLeitor}>
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_3}>
                                <img className={styles.imagensProjeto} src="/personal-project.png" alt="livre-leitor" />
                                
                                <div className={styles.containerDeBTN}>
                                    <a href="https://livre-leitor.netlify.app/" target="_blank" className="btn btnPersonalizado" id={styles.deploy}><span className="detalhes-btn quadrado_1"></span>
                                        DEPLOY
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                    <a href="https://github.com/ramon-rodrigues-001/My-personal-project" target="_blank" className="btn btnPersonalizado" id={styles.github}><span className="detalhes-btn quadrado_1"></span>
                                        GITHUB
                                    <span className="detalhes-btn quadrado_2"></span></a>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>


                {/* DESCRIÇÂO DOS PROJETOS */}
                <div id={styles.descrition_of_project}>
                    <h2 id={styles.title_descrition_of_project}>
                        {titleProjeto}
                    </h2>
                    <p id={styles.paragrafh_descrition_of_project}>
                        {descrition}
                    </p>
                    <div>
                        {imgFerramentas[0] && (
                            <img src={`/icone-habilidades/${imgFerramentas[0]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[1] && (
                            <img src={`/icone-habilidades/${imgFerramentas[1]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[2] && (
                            <img src={`/icone-habilidades/${imgFerramentas[2]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[3] && (
                            <img src={`/icone-habilidades/${imgFerramentas[3]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[4] && (
                            <img src={`/icone-habilidades/${imgFerramentas[4]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[5] && (
                            <img src={`/icone-habilidades/${imgFerramentas[5]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[6] && (
                            <img src={`/icone-habilidades/${imgFerramentas[6]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[7] && (
                            <img src={`/icone-habilidades/${imgFerramentas[7]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                        {imgFerramentas[8] && (
                            <img src={`/icone-habilidades/${imgFerramentas[8]}`} className={styles.icones_de_desenvolvimento} />
                        )}
                    </div>
                </div>
                {/* <!-- / CARROSEL DE PROJETOS --> */}


                {/* <!-- CARDS DE PROJETOS --> */}
                {mostraCards && (
                    <div id={styles.cardsDeProjetos}>
                        <div className={styles.item_projetos}>
                            <img src="/projeto-blizzard.webp" />
                            <span className={styles.containerBTN}>
                                <a href="https://ramon-rodrigues-001.github.io/Games-Blizzard/" target="_blank" className="btn btnPersonalizado">
                                    DEPLOY
                                </a>
                                <a href="https://github.com/ramon-rodrigues-001/Games-Blizzard" target="_blank" className="btn btnPersonalizado">
                                    GITHUB
                                </a>
                            </span>
                        </div>
                        <div className={styles.item_projetos}>
                            <img src="/god-of-war-tela.jpg" alt="god-of-war" />
                            <span className={styles.containerBTN}>
                                <a href="https://ramon-rodrigues-001.github.io/God-Of-War/" target="_blank" className="btn btnPersonalizado">
                                    DEPLOY
                                </a>
                                <a href="https://github.com/ramon-rodrigues-001/God-Of-War" target="_blank" className="btn btnPersonalizado">
                                    GITHUB
                                </a>
                            </span>
                        </div>
                        <div className={styles.item_projetos}>
                            <img src="/personal-project.png" alt="Livre-leitor" />
                            <span className={styles.containerBTN}>
                                <a href="https://livre-leitor.netlify.app/" target="_blank" className="btn btnPersonalizado">
                                    DEPLOY
                                </a>
                                <a href="https://github.com/ramon-rodrigues-001/My-personal-project" target="_blank" className="btn btnPersonalizado">
                                    GITHUB
                                </a>
                            </span>
                        </div>

                    </div>
                )}


                <a href="" className="btn btnPersonalizado" id={styles.btnMaisProjetos}>Ver mais projetos</a>
            </div>
        </section>
        </span>
    )
}



            // <label for="mais-projetos" id="label-projetos">
            //     <a className="btn btn-outline-info btnPersonalizado" id="btn-mais-projetos"  onclick="mostrar_projetos()">MOSTRAR MAIS</a>
            // </label>