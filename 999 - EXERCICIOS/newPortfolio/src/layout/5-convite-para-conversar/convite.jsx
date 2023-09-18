import styles from "./convite.module.scss"
import { SendFill } from 'react-bootstrap-icons';


export default function Convite(props) {

    const tema = props.tema

    return (
        <span  id="ancora-contatos">
        <section className={styles.sectionConvite} id={tema === 'Light' ? styles.Light : null}>
            <div className={styles.containerConvite}>
                <p className={styles.subTitle}>Convite</p>
                <h3 className={styles.title}>Mande um oi 🖐</h3>
                
                <div className={styles.cards}>
                    <div className={styles.cardConvite}>
                        <img src="https://thumbs.dreamstime.com/z/equipe-do-programador-e-de-projeto-torna-se-para-aplica%C3%A7%C3%A3o-web-com-funcionamento-da-neg%C3%B3cio-126510094.jpg?w=992" alt="" className={styles.img} />
                        <h3 className={styles.titleConvite}>Vamos trabalhar juntos</h3>
                        <p>
                            Esta precisando de um programador/desenvolvedor web para sua empresa Vamos conversar e discutir como posso contribuir com as suas necessidades. Mande um oi 🖐.
                        </p>
                        <button class="btnPersonalizado" >
                            <a href="#div-name-email" class="a">
                                < SendFill /> Iniciar uma conversa.
                            </a>
                        </button>
                    </div>
                    <div className={styles.cardConvite}>
                        <img src="https://thumbs.dreamstime.com/z/conceito-de-processo-desenvolvimento-aplica%C3%A7%C3%B5es-m%C3%B3veis-isom%C3%A9tricas-e-concep%C3%A7%C3%A3o-web-projetos-equipe-trabalho-do-grupo-157569667.jpg?w=992" alt="" className={styles.img} />
                        <h3 className={styles.titleConvite}>Quer iniciar um projeto comigo?</h3>
                        <p>
                            Conte comigo para colocar seu projeto em prática. Com interesse e dedicação, estou pronto para ouvir suas ideias e transformá-las em realidade. Vamos tirar esse projeto do papel juntos! eu organizo tudo.
                        </p>
                        <button class="btnPersonalizado">
                            <a href="#div-name-email" class="a">
                                < SendFill /> Freelancer!
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </span>
    )
}