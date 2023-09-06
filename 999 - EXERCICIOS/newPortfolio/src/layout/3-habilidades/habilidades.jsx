import styles from "./habilidades.module.scss"


// RETIRAR OS ELEMENTOS DE ANimação 
export default function Habilidades(props) {
    const tema = props.tema

    return (
        <section className={styles.habilidades} id={tema == 'Light' ? styles.temaLight : null}>
            <div className={styles.container_habilidades}>
                <div data-aos="fade-right" data-aos-duration="800">
                    <p className={styles.subTitle} id="inicio">
                        Habilidades
                    </p>
                    <h3 className={styles.title}>Tecnologias que utilizo</h3>
                    <input type="checkbox" name="input-habilidades" id="mais-habilidades" />
                    <div id={styles.conteiner_cards}>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-1">
                            <a href="#habilidades" >
                                <img src="public/icon-habilits/html5-plain.svg" className={styles.iconHabilits} alt="icon_HTML_5" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">HTML</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-2">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/css3-plain.svg" className={styles.iconHabilits} alt="icon_CSS_3" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">CSS</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-3">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/javascript-plain.svg" className={styles.iconHabilits} alt="icon_JS" />
                                <h3 className="title_ability"></h3>
                                <p className="h5 px-1">JAVASCRIPT</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-4">
                            <a href="#habilidades">
                                <img src="/icon-habilits/sass-original.svg" className={styles.iconHabilits} alt="icon_SASS" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">SASS</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-5">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/bootstrap-plain.svg" className={styles.iconHabilits} alt="icon_BOOTSTRAP" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">BOOTS...</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-6">
                            <a href="#habilidades">
                                <img src="public/icone-habilidades/react.png" className={styles.iconHabilits} alt="icon_REACT" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">REACT</p>
                            </a>
                        </div>
                        <div className={styles.cards}  data-aos="zoom-in"  id="hab-7">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/mongodb-plain.svg" className={styles.iconHabilits} alt="icon_mongoDB" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">MONGO.DB</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-8">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/nodejs-plain.svg" className={styles.iconHabilits} alt="icon_NodeJs" />
                                <h3 className={styles.title_ability}></h3>
                                <p className="h5 px-1">NODE.JS</p>
                            </a>
                        </div>
                
                        <label for="mais-habilidades">
                            <a className="btn btn-outline-info btnPersonalizado" id={styles.btn_mais_habilidades}>
                                <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.ii}/>
                                VER MAIS 
                                <img src="https://images.vexels.com/media/users/3/189736/isolated/lists/5301d109614cc1af7ef2b7b29ecafe91-goong-vetor-de-seta-para-baixo.png" alt="" className={styles.ii}/>
                            </a>
                            
                        </label>
                    </div>
                    <div className="container" id="conteiner-resposta-abilidade">
                        <h5 id="titliInicial">Click em uma habilidade!</h5>
                        <p id="paragrafInicial"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}