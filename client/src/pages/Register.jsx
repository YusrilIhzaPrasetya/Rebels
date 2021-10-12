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
        <div className="flex justify-center items-center fixed w-screen h-screen">
            <form id="myform" action="registerUser" onSubmit={registerUser} className="flex flex-col items-center">
                <input type="text" placeholder="Masukan nama ..." name="nama" className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <input type="text" placeholder="Masukan email ..." name="email" className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <input type="password" placeholder="Masukan password ..." name="password" className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <button type="submit" value="Submit Form" className="border-transparent bg-green-500 text-white w-28 text-l p-3 rounded-lg mt-3" >Daftar</button>
                <Link to="/login"><button className="text-sm mt-6 h-2">Sudah Punya Akun?</button></Link>
            </form>
        </div>
    )
}

export default Register
