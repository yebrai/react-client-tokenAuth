import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from "../context/auth.context.js"


function Navbar() {

  const {authenticateUser, isLoggedIn} = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    //despues de borrar el token, volvemos a invocar la funcion de validar
    authenticateUser()
  }
  return (
    <div>
    {isLoggedIn ? (
       <div>
    <Link to="/">Home</Link>
    <button onClick={handleLogout}>Cerrar Sesión</button>

       </div>
    ) : (
      <div>
      <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
</div>
    )} 


    </div>
  )
}

export default Navbar