import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss'

import Header from './components/aplicativo/common/header/Header'
import Aside from './components/aplicativo/common/aside/Aside'
import Discontrair from './components/aplicativo/pages/discontrair/Discontrair'
import BatePapo from './components/aplicativo/pages/bate_papo/BatePapo';
import Noticias from './components/aplicativo/pages/noticias/Noticias';


export default function App() {
    return (
        <div className={styles.container}>
            < Header />

            <main className={styles.main}>
                <div className={styles.containerAsideDaEsquerda}>
                    < Aside />
                </div>
                <div className={styles.containerVitrineDaDireita}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={< Discontrair />} />
                            <Route path="/batePapo" element={< BatePapo />} />
                            <Route path="/noticias" element={< Noticias />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </main>
        </div>
    )
}
