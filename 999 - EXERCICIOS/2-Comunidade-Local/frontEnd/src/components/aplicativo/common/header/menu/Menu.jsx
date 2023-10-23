import styles from './Menu.module.scss'

function Menu(props) {
    const setMenu = props.setMenu

  return (
    <div className={styles.menu}>
        <div className={styles.headerMenu}>
            <h3>Menu Lateral</h3>
            <button className={styles.btnOpenMenu} onClick={setMenu}>
                <i class="bi bi-x"></i>
            </button>
        </div>
        <div className={styles.bodyMenu}>
            <div className={styles.navIconesMenu}>
                <a href="/" ><i class="bi bi-cup-hot-fill"></i></a>
                <a href="/batePapo"><i class="bi bi-people-fill"></i></a>
                <a href="/noticias"><i class="bi bi-newspaper"></i></a>
                <a href="/perfil"><i class="bi bi-person-fill"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Menu
