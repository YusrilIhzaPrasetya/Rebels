import React from 'react'
import { Route, Redirect } from 'react-router'

function PublicRouting(props) {

    const token = localStorage.getItem("token")

    if (!token){
        return <Route {...props}>{
            props.childern
        }</Route>
    }else{
       return <Redirect to="/main"></Redirect>
    }

}

export default PublicRouting
