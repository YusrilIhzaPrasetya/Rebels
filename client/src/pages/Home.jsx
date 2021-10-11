import React from 'react';
import {BrowserRouter as Router,Link, Switch, Route} from "react-router-dom";


export default function Home() {
    return (
        <div>
            <button><Link to="/login">Login</Link></button>
            <br />
            <br />
            <button><Link to="/register">Registrasi</Link></button>
        </div>
    )
}
