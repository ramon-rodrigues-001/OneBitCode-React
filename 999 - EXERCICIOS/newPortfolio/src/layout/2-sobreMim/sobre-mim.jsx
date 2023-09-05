import styles from "./sobre-mim.module.scss"

export default function SobreMim(props) {
    const { tema, olhos } = props
    // console.log(olhos)

    return (
        <section className={styles.home_sobreMim} id={tema === 'Light' ? styles.Light : styles.Dark}>
            <div className={styles.container_sobreMim}>
                {olhos && (
                    <img src="/olhos.webp" alt="" className={styles.olhos_sobreMim} />
                )}
                
                <p className={styles.subTitle}>Welcome</p>
                <h1 className={styles.title}>DESENVOLVEDOR WEB</h1>
                <p className={styles.descrition}>
                    🖐 Ola me chamo Ramon. <br />
                    💻 Desenvolvedor Front-End <br />
                    🤵 Buscando novas oportunidades de trabalho <br />
                    🚀 HTML │ CSS │ JavaScript │ React │ Sass │ Bootstrap │ Node │ MongoDB
                </p>
            </div>
        </section>
    )
}