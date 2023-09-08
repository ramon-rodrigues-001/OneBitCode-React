import { useEffect, useState } from "react";
import styles from "./projetos.module.scss";

export default function Projeto() {
    const [mostraCards, setMostrarCards] = useState(false)

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

    return (
        <section id={styles.projetos}>
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
                        
                        <label for="input-slider-1" id="label-1">
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_1}>
                                <img className={styles.imagensProjeto} src="public/god-of-war-tela.jpg" alt="projeto-GodOfWar" />
                                
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

                        <label for="input-slider-2" id="label-2">
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_2}>
                                <img className={styles.imagensProjeto} src="public/projeto-blizzard.webp" />

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
                        
                        <label for="input-slider-3" id="label-3">
                            <div className={styles.cardsCarrosel} id={styles.cardLabel_3}>
                                <img className={styles.imagensProjeto} src="public/personal-project.png" alt="livre-leitor" />
                                
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
                    <h2>
                        <span className="span-azulMarinho" id="title-descrition-of-project">
                            God Of War
                        </span>
                    </h2>
                    <p id="paragrafh-descrition-of-project">
                        O projeto consiste em uma página de informações sobre o jogo 'God of War Ragnarök', que apresenta modo de jogar, personagens e trailer. Este projeto tem como foco o desenvolvimento da interfaçe não tendo um back-end robusto. Para a criação utilizei as tecnologias HTML, CSS, Sass, Bootstrap e JavaScript.
                    </p>
                    <div>
                        <img src="public/icone-habilidades/html.png" alt="HTML" className={styles.icones_de_desenvolvimento} />

                        <img src="public/icone-habilidades/css.png" alt="CSS" className={styles.icones_de_desenvolvimento} />
                        
                        <img src="public/icone-habilidades/javascript.png" alt="JavaScript" className={styles.icones_de_desenvolvimento} />
                        
                        <img src="public/icone-habilidades/sass.png" alt="SASS" className={styles.icones_de_desenvolvimento} />
                        
                        <img src="public/icone-habilidades/bootstrap.png" alt="bootstrap" className={styles.icones_de_desenvolvimento} />
                    </div>
                </div>
                {/* <!-- / CARROSEL DE PROJETOS --> */}


                {/* <!-- CARDS DE PROJETOS --> */}
                {mostraCards && (
                    <div id={styles.cardsDeProjetos}>
                        <div className={styles.item_projetos}>
                            <img src="public/projeto-blizzard.webp" />
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
                            <img src="public/god-of-war-tela.jpg" alt="god-of-war" />
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
                            <img src="public/personal-project.png" alt="Livre-leitor" />
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
            </div>
        </section>
    )
}



            // <label for="mais-projetos" id="label-projetos">
            //     <a className="btn btn-outline-info btnPersonalizado" id="btn-mais-projetos"  onclick="mostrar_projetos()">MOSTRAR MAIS</a>
            // </label>