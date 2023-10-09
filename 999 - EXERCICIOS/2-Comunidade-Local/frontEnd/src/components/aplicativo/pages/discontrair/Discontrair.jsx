import styles from "./Discontrair.module.scss"

function Discontrair() {
  return (
    <div className={styles.discontrair}>
        <div className={styles.background}>
            {/* <div className={styles.card_header}>
              <h2>Welcome! à nossa Plataforma de Comunidade!, Capelinha</h2> 
            </div><br /> */}
            <img src="/background-home.jpg" alt="background-home" className={styles.img_background}/>

            <div className={styles.post}>
              
            </div>
        </div>
    </div>
  )
}

export default Discontrair
