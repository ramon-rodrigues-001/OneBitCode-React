import styles from './App.module.scss'

import Header from './components/aplicativo/common/header/Header'
import Aside from './components/aplicativo/common/aside/Aside'
import Discontrair from './components/aplicativo/pages/discontrair/Discontrair'


export default function App() {
    return (
        <div className={styles.container}>
            < Header />

            <main className={styles.main}>
                <div className={styles.containerAsideDaEsquerda}>
                    < Aside />
                </div>
                <div className={styles.containerVitrineDaDireita}>
                    < Discontrair />
                </div>
            </main>
        </div>
    )
}
