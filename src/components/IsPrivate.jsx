//componente envoltorio que verifique si el usuario esta logeado o no y renderize el componente interno acorde

import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate} from "react-router-dom" 
import React from 'react'

function IsPrivate(props) {

    const {isLoggedIn} = useContext(AuthContext)

    // si isLoggedIn es true, renderiza props.children
    if (isLoggedIn) {

        return props.children
    } else {
        return <Navigate to="/login"/>
        //utilizamos navigate simir a navigate() cuando queremos renderizar sin funcion o useEffect
    }

    //si no, redirecciona


}

export default IsPrivate