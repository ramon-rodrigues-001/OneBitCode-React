import styles from "./BatePapo.module.scss"

function BatePapo() {
  return (
    <section className={styles.SectionBatePapo}>
      <div className={styles.containerDeCardsDeGrupos}>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
      </div>
      <div className={styles.containerCardsNovosGrupos}>
        <div className={styles.cardNovoGrupo}></div>
        <div className={styles.cardNovoGrupo}></div>
      </div>
    </section>
  )
}

export default BatePapo
