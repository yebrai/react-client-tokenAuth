import { createContext, useState, useEffect } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();
//es un Componentes, lo crea react con createContext()

function AuthWrapper(props) {
  //creamos todos los estados y funciones que queremos pasar por contexto

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    authenticateUser()

  },[]) //component did Mount => el componente que envuelve a App

  const authenticateUser = async() => {
    //ejecutar para validar el token del usuario y actualizar los estados
    setIsFetching(true) //cambiar esto a true mientras verifico el token
    try {
        const response = await verifyService()
        console.log(response);
        //a partir de este punto, el token esta validado en FE
        setIsLoggedIn(true)
        setUser(response.data)
        setIsFetching(false)


    } catch (error) {
        console.log(error)
        setIsLoggedIn(false)
        setUser(null)
        setIsFetching(false)

    }
  }


  const passedContext = {

    isLoggedIn,
    user,
    authenticateUser
  }

  if (isFetching) {
    return (
        <div className="App">
            <h3>... Validando al usuario</h3>
        </div>
    )
  }


  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthWrapper, AuthContext };