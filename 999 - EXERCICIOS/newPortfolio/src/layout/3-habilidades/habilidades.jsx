import styles from "./habilidades.module.scss"

export default function Habilidades() {
    return (
        <section id={styles.habilidades}>
                <div data-aos="fade-right" data-aos-duration="800">  
                    <p className={styles.subTitle} id="inicio">
                        Habilidades
                    </p>
                    <input type="checkbox" name="input-habilidades" id="mais-habilidades" />
                    <div id={styles.conteiner_cards}>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-1">
                            <a href="#habilidades" >
                                <img src="public/icon-habilits/html5-plain.svg" className={styles.iconHabilits} alt="icon_HTML_5" />
                                <h3 className={styles.title_ability}>HTML5</h3>
                                <p className="h5 px-2">Avançado</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-2">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/css3-plain.svg" className={styles.iconHabilits} alt="icon_CSS_3" />
                                <h3 className={styles.title_ability}>CSS</h3>
                                <p className="h5 px-2">Avançado</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-3">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/javascript-plain.svg" className={styles.iconHabilits} alt="icon_JS" />
                                <h3 className="title_ability">JAVASCRIPT</h3>
                                <p className="h5 px-2">Avançado</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-4">
                            <a href="#habilidades">
                                <img src="public/icone-habilidades/sass.png" className={styles.iconHabilits} alt="icon_SASS" />
                                <h3 className={styles.title_ability}>SASS</h3>
                                <p className="h5 px-2">Avançado</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-5">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/bootstrap-plain.svg" className={styles.iconHabilits} alt="icon_BOOTSTRAP" />
                                <h3 className={styles.title_ability}>BOOTSTRAP</h3>
                                <p className="h5 px-2">Basico</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-6">
                            <a href="#habilidades">
                                <img src="public/icone-habilidades/react.png" className={styles.iconHabilits} alt="icon_REACT" />
                                <h3 className={styles.title_ability}>REACT</h3>
                                <p className="h5 px-2">Basico</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-7">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/nodejs-plain.svg" className={styles.iconHabilits} alt="icon_NodeJs" />
                                <h3 className={styles.title_ability}>NodeJs</h3>
                                <p className="h5 px-2">Basico</p>
                            </a>
                        </div>
                        
                        <div className={styles.cards}  data-aos="zoom-in"  id="hab-8">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/mongodb-plain.svg" className={styles.iconHabilits} alt="icon_mongoDB" />
                                <h3 className={styles.title_ability}>MongoDB</h3>
                                <p className="h5 px-2">Basico</p>
                            </a>
                        </div>
                        <div className={styles.cards} data-aos="zoom-in" id="hab-9">
                            <a href="#habilidades">
                                <img src="public/icon-habilits/nodejs-plain.svg" className={styles.iconHabilits} alt="icon_TYPESCRIPT" />
                                <h3 className={styles.title_ability}>Express</h3>
                                <p className="h5 px-2">Basico</p>
                            </a>
                        </div>

                        <label for="mais-habilidades">
                            <a className="btn btn-outline-info btnPersonalizado" id="btn-mais-habilidades">MOSTRAR MAIS</a>
                        </label>
                    </div>
                    <div className="container" id="conteiner-resposta-abilidade">
                        <h5 id="titliInicial">Click em uma habilidade!</h5>
                        <p id="paragrafInicial"></p>
                    </div>
                </div>
                <span id="ancora-projetos"></span>  
            </section>
    )
}