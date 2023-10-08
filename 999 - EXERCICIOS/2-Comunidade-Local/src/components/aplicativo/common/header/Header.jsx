import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header>
        <h1>Comunity</h1>
        <ul>
          <li id={styles.discontrair}>
            <a href="/"><i class="bi bi-cup-hot-fill"></i></a>
          </li>
          <li id={styles.batePapo}>
            <a href="/batePapo"><i class="bi bi-people-fill"></i></a>
          </li>
          <li id={styles.noticias}>
            <a href="/noticias"><i class="bi bi-newspaper"></i></a>
          </li>
          
          <li id={styles.mudarTema}>
            <i class="bi bi-brightness-high-fill"></i>
          </li>
        </ul>

        <div>
          <ul>
            <li id={styles.bell}>
              <i class="bi bi-bell-fill"></i>
            </li>
            <li id={styles.perfil}>
              <i class="bi bi-person-fill"></i>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header
