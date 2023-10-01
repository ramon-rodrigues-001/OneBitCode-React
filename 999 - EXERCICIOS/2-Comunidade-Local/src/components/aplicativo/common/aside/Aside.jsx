import styles from "./Aside.module.scss"

function Aside() {
  return (
    <div className={styles.aside}>
        <h3>Seus Amigos</h3>

        <div className={styles.containerAmigos}>
            <div className={styles.cardsAmigos}>
              Ramon
              <div className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>4</span>
              </div>
            </div>

            <div className={styles.cardsAmigos}>
              Davi
              <div className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>1</span>
              </div>
            </div>

            <div className={styles.cardsAmigos}>
              Maria
              <div className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>1</span>
              </div>
            </div>

            <div className={styles.cardsAmigos}>
              Lucas
              <div  className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>0</span>
              </div>
            </div>

            <div className={styles.cardsAmigos}>
              Ray
              <div className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>0</span>
              </div>
            </div>

            <div className={styles.cardsAmigos}>
              LOREN IP ...
              <div className={styles.informationsAmigo}>
                <span className={styles.span}></span>
                <i class="bi bi-pencil-fill"></i>
                <span>0</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Aside
