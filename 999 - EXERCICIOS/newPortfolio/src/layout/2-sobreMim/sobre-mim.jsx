import styles from "./sobre-mim.module.scss"

export default function SobreMim(props) {
    const tema = props.tema

    return (
        <section className={styles.home_sobreMim} id={tema === 'Light' ? styles.Light : styles.Dark}>
            <p className={styles.subTitle}>Welcome</p>
            <h1 className={styles.title}>DESENVOLVEDOR WEB</h1>
            <p className={styles.descrition}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda doloremque deserunt, praesentium aperiam officia dolorem minima molestias soluta quidem facere nemo eaque error quisquam adipisci enim ea ipsum voluptate?
            </p>
        </section>
    )
}