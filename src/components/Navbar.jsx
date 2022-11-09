import {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {AuthContext} from "../context/auth.context.js"


function Navbar() {

  const {authenticateUser, isLoggedIn} = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    //despues de borrar el token, volvemos a invocar la funcion de validar
    authenticateUser()
    //setuserr(null)
    //setIsLoggin(false)
    //Opcionalmente podemos agregar la redireccion aunque ahora ya lo hace
  }

  const asingClassName= (navInfo) => {
      console.log(navInfo.isActive);
      if(navInfo.isActive) {
        return "nav-active"
      } else {
        return "nav-inactive"
      }
  }
  

  //Navlink nos permite agregar como valor a className, id, styles incluso innerText de etiquetas. Una funcion que verifica la locacion actual del usuario


  return (
    <div>
    {isLoggedIn ? (
       <div>
    <NavLink to="/" className={asingClassName}><button>Home</button></NavLink>
    <NavLink to="/profile" className={asingClassName}><button>Perfil</button></NavLink>
    <span className='nav-inactive'>
    <button onClick={handleLogout}>Cerrar Sesión</button>
</span>
       </div>
    ) : (
      <div>
      <NavLink to="/" className={asingClassName}><button>Home</button></NavLink>
    <NavLink to="/login" className={asingClassName}><button>Login</button></NavLink>
    <NavLink to="/signup" className={asingClassName}><button>Signup</button></NavLink>
</div>
    )} 


    </div>
  )
}

export default Navbar