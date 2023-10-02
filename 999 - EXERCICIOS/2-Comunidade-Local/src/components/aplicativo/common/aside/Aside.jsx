import styles from "./Aside.module.scss"

function Aside() {
  return (
    <div className={styles.aside}>
        <h2>Seus Amigos</h2>

      <div className={styles.cardsAmigos}>
        Ramon
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>4</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Davi
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>1</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Maria
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>1</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Lucas
        <div  className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Ray
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        LOREN IP ...
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

export default Aside
