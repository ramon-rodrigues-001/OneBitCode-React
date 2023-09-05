import anime from 'animejs/lib/anime.es.js';
import styles from "./sobre-mim.module.scss"
import { useEffect } from 'react';

export default function SobreMim(props) {
    const { tema, olhos } = props

    useEffect(() => {
        anime({
            targets: '.function-based-values-demo .el',
            translateX: function(el) {
                return el.getAttribute('data-x');
            },
            translateY: function(el, i) {
                return 50 + (-50 * i);
            },
            scale: function(el, i, l) {
                return (l - i) + 0.25;
            },
            rotate: function() { return anime.random(-360, 360); },
            borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
            duration: function() { return anime.random(5000, 5000); },
            delay: function() { return anime.random(700, 1000); },
            direction: 'alternate',
            loop: true
        });
    }, []);

    return (
        <section className={styles.home_sobreMim} id={tema === 'Light' ? styles.Light : styles.Dark}>
            <div className={styles.container_sobreMim}>
                <div>
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
                        🚀 HTML │ CSS │ JavaScript │ React │ Sass │ Bootstrap │ Node │ MongoDB
                    </p>
                </div>

                <div className="function-based-values-demo" id={styles.anime}>
                    <div className="el" id={styles.it} data-x="20">
                        Ramon
                    </div>
                    <div className="el" id={styles.it} data-x="50">
                        Front-end
                    </div>
                </div>
            </div>
        </section>
    )
}