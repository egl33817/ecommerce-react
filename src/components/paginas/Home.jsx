import { API_URL } from "../../constants/env"
import "./Home.css"

function Home() {

  return (
    <div className="home-container">
      <h1 className="title">Hola tienda online. API: {API_URL}</h1>
      <p className="subtitle">Este es el sitio en desarrollo</p>
    </div>
  )

}

export default Home