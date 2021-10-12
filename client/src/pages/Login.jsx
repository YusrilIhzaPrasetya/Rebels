import React from 'react'

function Login() {

    const loginUser =(event)=>{
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;

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
        <div className="flex justify-center items-center fixed w-screen h-screen">
            <form action="loginUser" onSubmit={loginUser} className="flex flex-col items-center">
                <input type="email" placeholder="Masukan Email . . ." name="email" className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <input type="password" name="password" placeholder="Masukan Password . . ." className="bg-black bg-opacity-10 border-none w-80 drop-shadow-xl p-2 rounded-lg my-2"/>
                <button className="border-transparent bg-green-500 text-white w-28 text-l p-3 rounded-lg mt-6">
                    Masuk
                </button>
            </form>
        </div>
    )
}

export default Login