import axios from "axios"

// todas las variables ENV en react deben empezar por REACT_APP_...
// EN REACT (o cualquier Frontend) en .env no se guardá informacion privada. EL FE SIEMPRE ES EXPUESTO
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

// en todas las llamadas de este servicio, vamos a buscar el Token e incluirlo.
service.interceptors.request.use((config) => {
  
  // 1. buscar el token en localStorage
  const authToken = localStorage.getItem("authToken")

  const tokenFull = `Bearer ${authToken}`

  // 2. anexar el toke a la solicitud
  if (authToken) {
    config.headers.authorization = tokenFull
  }

  return config
})


export default service