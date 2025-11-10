import { createBrowserRouter } from "react-router-dom"
import Home from "../components/paginas/Home"
import Error404 from "../components/paginas/Error404"

// Este router recibe un array con todas las rutas de mi aplicación.
// path: la ruta que quiero que se muestre.
// element: el componente que quiero que se muestre.
// errorElement: el componente que quiero que se muestre en caso de que la ruta solicitada no exista.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />
    }
])

export default router