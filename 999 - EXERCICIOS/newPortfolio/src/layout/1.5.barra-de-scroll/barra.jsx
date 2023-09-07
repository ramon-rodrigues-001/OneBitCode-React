import styles from "./barra.module.scss"

export default function Barra(props) {
    const tema = props.tema

    // Configurando barra de scroll
    window.onscroll = () => {
        const scroll = document.documentElement.scrollTop
    
        let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
        let rolagem = (scroll / altura) * 100
    
        document.querySelector('#barra-de-scroll').style.width = rolagem + "%"
    }

    return (
        // <!-- BARRA DE PROGRESO -->
        <div className={styles.scroll} id={tema === 'Light' ? styles.barraLight : styles.barraDark}>
            <div id="barra-de-scroll" className={styles.barra_de_scroll}>
                
            </div>
        </div>
    )
}