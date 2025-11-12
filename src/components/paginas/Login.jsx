import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import "./Login.css"

const Login = () => {

    const hacerLogin = (evento) => {
        evento.preventDefault()

        const datosUsuario = {
            email: evento.target.email.value,
            password: evento.target.password.value
        }

        axios.post(`${API_URL}/public/login`, datosUsuario)
            .then((respuesta) => {
                console.log(respuesta.data)
                setToken(respuesta.data.data.token)
            })
            .catch((error) => console.log(error))
    }

    return (

        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={hacerLogin}>
                <div className="field">
                    <label htmlFor="email">Correo electrónico: </label>
                    <input type="email" name="email" required />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" name="password" required />
                </div>
                <div className="submit">
                    <input type="submit" value="Iniciar sesión" />
                </div>
            </form>
        </div>
    )

}

export default Login