import styles from '../Perfil.module.scss'

export default function Login() {
    return (
        <div className={styles.formularioLogin}>
            <form id="login-form" >
                <h1 className={styles.titleLogin}>Login</h1>

                <div className={styles.inputContainer}>
                    <label for="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label for="password" className={styles.label}>Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required className={styles.input}/>
                </div>


                <button type="submit"  className={styles.buttonSubmit}>Entrar</button>
                <a href='/perfil/register' className={styles.buttonSubmit}>Não possuo uma conta</a>
            </form>
        </div>
    )
}