import styles from "./Discontrair.module.scss"

function Discontrair() {
  return (
    <div className={styles.discontrair}>
        <div className={styles.background}>
            <h2>Welcome! à nossa Plataforma de Comunidade!</h2>
            <p>
              Nossa plataforma é o lugar perfeito para você planejar eventos, criar comunidades e conectar-se com pessoas que compartilham os mesmos interesses que você. Além disso, oferecemos a oportunidade de encontrar grupos de nicho aos quais você pode se juntar e conhecer pessoas que estão próximas a você. Junte-se a nós hoje mesmo e comece a explorar todas as possibilidades que nossa comunidade tem a oferecer. Seja parte de algo incrível! 🌟
            </p>
            <img src="/background-home.jpg" alt="background-home" className={styles.img_background}/>
        </div>
    </div>
  )
}

export default Discontrair
