import styles from './App.module.scss'

import Header from './components/aplicativo/common/header/Header'
import Aside from './components/aplicativo/common/aside/Aside'

// import Discontrair from './components/aplicativo/pages/discontrair/Discontrair'

export default function App() {
    return (
        <main className={styles.main}>
            < Header />
            < Aside />
        </main>
    )
}
