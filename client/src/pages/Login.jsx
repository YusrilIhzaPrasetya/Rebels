import React from 'react'

function Login() {

    const loginUser =(event)=>{
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            email,
            password
        }
        const result =  fetch(`http://localhost:4000/users/login`,{
            method: `POST`, 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        } ).then((res) => res.json())
        console.log(result)
    }


    return (
        <div>
            <form action="loginUser" onSubmit={loginUser}>
                {/* Untuk input email */}
                <p>Input Email</p>
                <input type="email" name="email" className="border-black border-2"/>
                {/* Untuk input password */}
                <p>Input Password</p>
                <input type="password" name="password"  className="border-black border-2"/>
                <button>Masuk</button>
            </form>
        </div>
    )
}

export default Login