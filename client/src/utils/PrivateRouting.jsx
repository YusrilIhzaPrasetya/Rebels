import React from 'react'
import { Route, Redirect } from 'react-router'
import {useSelector} from "react-redux"

function PrivateRouting(props) {

    const state = useSelector(state => state.auth)

    if (state.token){
        return <Route {...props}>{
            props.childern
        }</Route>
    }else{
       return <Redirect to="/login"></Redirect>
    }

}

export default PrivateRouting
