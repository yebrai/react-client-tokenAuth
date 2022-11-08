
import axios from "axios"

// todas las variables ENV en react deben empezar por REACT_APP_...
// EN REACT (o cualquier Frontend) en .env no se guardá informacion privada. EL FE SIEMPRE ES EXPUESTO
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

export default service