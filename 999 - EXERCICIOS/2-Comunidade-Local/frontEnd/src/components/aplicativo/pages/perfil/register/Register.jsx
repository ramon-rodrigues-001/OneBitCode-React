import styles from '../Perfil.module.scss'


export default function Register() {

    const handleSubmit = async ( event ) => {
        event.preventDefault()

        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const formData = { username, email, password }
    
        try {
            const response = await fetch("http://localhost:4000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
      
            if (response.status === 200) {
              alert("Certo === 200")
            } 
            else if (response.status === 501) {
                alert('Nome repetido')
            }
            else if (response.status === 502) {
                alert('Email repetido')
            }
            else if (response.status === 503) {
                alert('Senha repetido')
            }
            else {
                alert("Erro Status !== 200")
            }
        } 
        catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }




    return (
        <div className={styles.formulario}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.title}>Register</h1>

                <div className={styles.inputContainer}>
                    <label htmlFor="username" className={styles.label}>Nome Do Usuário</label>
                    <input type="text" id="username" name="username" placeholder="Digite seu nome" required className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="password" className={styles.label}>Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required className={styles.input}/>
                </div>


                <button type="submit"  className={styles.buttonSubmit}>Entrar</button>
                
                <a href='/perfil/login' className={styles.buttonSubmit}>Já tenho uma conta</a>
            </form>
        </div>
    )
}
