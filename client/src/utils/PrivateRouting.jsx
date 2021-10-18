import React from 'react'
import { Route, Redirect } from 'react-router'
import {useSelector} from "react-redux"

function PrivateRouting(props) {

    const state = useSelector(state => state.auth)
    let dataLogin = localStorage.getItem("dataLogin")
    dataLogin = JSON.parse(dataLogin)

    if (dataLogin && dataLogin.token){
        return <Route {...props}>{
            props.childern
        }</Route>
    }else{
       return <Redirect to="/login"></Redirect>
    }

}

export default PrivateRouting
