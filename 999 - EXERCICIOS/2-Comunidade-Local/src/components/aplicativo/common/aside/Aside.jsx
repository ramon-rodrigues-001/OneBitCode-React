import styles from "./Aside.module.scss"

function Aside() {
  return (
    <div className={styles.aside}>
        <h3>Amigos</h3>

        <div className={styles.containerAmigos}>
            <div className={styles.cardsAmigos}>
              Ramon
              <div>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Aside
