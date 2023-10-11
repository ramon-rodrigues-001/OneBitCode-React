import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login"
import Register from "./register/Register"
import styles from "./Perfil.module.scss"

function Perfil() {
    const [situacao, setsituacao] = useState('login')


    return (
        (situacao === 'login' && [
            < Login situacao={situacao}/>
        ])
    )
}

export default Perfil
