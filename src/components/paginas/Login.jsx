import "./Login.css"

const Login = () => {

    const hacerLogin = (evento) => {
        // Evitamos envío del form con el método GET del navegador.
        evento.preventDefault()
        alert("Formulario enviado")
    }

    return (

        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={hacerLogin}>
                <div className="field">
                    <label htmlFor="email">Correo electrónico: </label>
                    <input type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value="Iniciar sesión" />
                </div>
            </form>
        </div>
    )

}

export default Login