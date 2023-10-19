import styles from "./BatePapo.module.scss"

function BatePapo() {
  return (
    <section className={styles.SectionBatePapo}>
      <div className={styles.containerCardsNovosGrupos}>
        <div className={styles.cardNovoGrupo}>
          <i class="bi bi-plus-lg"></i>
          <p>Achar grupo</p>
        </div>
        <div className={styles.cardNovoGrupo}>
          <i class="bi bi-plus-square-dotted"></i>
          <p>Criar gropo</p>
        </div>
        <div className={styles.cardNovoGrupo}>
        <i class="bi bi-people-fill"></i>
          <p>Seus Amigos</p>
        </div>
      </div>

      <div className={styles.containerDeCardsDeGrupos}>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
      </div>
    </section>
  )
}

export default BatePapo
