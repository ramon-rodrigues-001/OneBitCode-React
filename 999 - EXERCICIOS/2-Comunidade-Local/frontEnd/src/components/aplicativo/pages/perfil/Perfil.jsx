import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./login/Login"
import Register from "./register/Register"
import styles from "./Perfil.module.scss"

function Perfil() {
    const [situacao, setsituacao] = useState('Deslogado')

    

    return (
        (situacao === 'Deslogado' && <Navigate to="login/" />)
    )
}

export default Perfil
