import styles from "./Discontrair.module.scss"

function Discontrair() {
  return (
    <div className={styles.discontrair}>
        <div className={styles.background}>
            <h1>Welcome! à nossa Plataforma de Comunidade!</h1> <br />
            <img src="/background-home.jpg" alt="background-home" className={styles.img_background}/>
        </div>
    </div>
  )
}

export default Discontrair
