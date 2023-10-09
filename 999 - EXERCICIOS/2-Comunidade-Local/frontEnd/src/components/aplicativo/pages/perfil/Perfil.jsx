import { useState } from "react"
import styles from "./Perfil.module.scss"

function Perfil() {
    const [logado, setLogado] = useState(false)

    const handleSubmit = async ( event ) => {
        event.preventDefault()

        const formData = new FormData(event.target);
    
        try {
            const response = await fetch("http://localhost:4000/api/login", {
              method: "POST",
              body: formData,
            });
      
            if (response.status === 200) {
              setLogado(true);
              alert("Certo === 200")
            } else {
                // Tá chegando aqui !! qual o erro?
                alert("Erro Status !== 200")
            }
        } 
        catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        
    }

    return (
        [!logado && (
            <div className={styles.formularioLogin}>
                <form id="login-form" onSubmit={handleSubmit}>
                    <h1 className={styles.titleLogin}>Login</h1>

                    <div className={styles.inputContainer}>
                        <label for="username" className={styles.label}>Nome Do Usuário</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu nome" required className={styles.input}/>
                    </div>

                    <div className={styles.inputContainer}>
                        <label for="email" className={styles.label}>Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={styles.input}/>
                    </div>

                    <div className={styles.inputContainer}>
                        <label for="password" className={styles.label}>Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required className={styles.input}/>
                    </div>


                    <button type="submit"  className={styles.buttonSubmit}>Entrar</button>
                </form>
            </div>
        )]
    )
}

export default Perfil
