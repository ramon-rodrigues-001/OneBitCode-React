import anime from 'animejs/lib/anime.es.js';
import styles from "./sobre-mim.module.scss"
import { useEffect } from 'react';

export default function SobreMim(props) {
    const { tema, olhos } = props


    return (
        <section className={styles.home_sobreMim} id={tema === 'Light' ? styles.Light : styles.Dark}>
            <div className={styles.container_sobreMim} id='ancora-sobre-mim'>
                <div className={styles.divText}>
                    {olhos && (
                        <img src="/olhos.webp" alt="" className={styles.olhos_sobreMim} />
                    )}
                    
                    <p className={styles.subTitle}>Welcome</p>
                    <h1 className={styles.title}>DESENVOLVEDOR WEB</h1>
                    <p className={styles.descrition}>
                        🖐 Ola me chamo Ramon. <br />
                        💻 Desenvolvedor Front-End <br />
                        🤵 Buscando novas oportunidades de trabalho <br />
                        🎓 Curso tecnico: OneBitCode <br />
                        🚀 Afinidade: JavaScript │ React
                    </p>
                </div>

                <div className={styles.container_img_programador}>
                    <img src="/newProgramador.png" alt="" className={styles.img_programador}/>
                </div>
            </div>
        </section>
    )
}