import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";

function Register() {
    // const form = document.getElementById('form-register')
    // form.addEventListener('submit',registerUser)

    const registerUser =(event)=>{
        event.preventDefault()
        let nama = event.target.nama.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        
        const result =  fetch(`http://localhost:4000/users/register`,{
            method: `POST`, 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama,
                email,
                password
            })
        } ).then((res) => res.json())
        console.log(result)
    }
 
    return (
        <div>
            <form id="myform" action="registerUser" onSubmit={registerUser}>
                {/* Untuk input nama */}
                <p>Input Nama</p>
                <input type="text" name="nama" className="border-black border-2"/>
                {/* Untuk input email */}
                <p>Input Email</p>
                <input type="text" name="email" className="border-black border-2"/>
                {/* Untuk input password */}
                <p>Input Password</p>
                <input type="password" name="password" className="border-black border-2"/>
                <button type="submit" value="Submit Form" >Daftar</button>
                
                <button><Link to="/">Back</Link></button>
            </form>
        </div>
    )
}

export default Register
