import React from 'react'

function Register() {

    const handleSubmit=(event)=>{
        event.preventDefault()
        let nama = event.target.nama.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            nama,
            email,
            password
        }
    }

    return (
        <div>
            <form action="">
                {/* Untuk input nama */}
                <input type="text" name="nama" className="border-black border-2"/>
                {/* Untuk input email */}
                <input type="text" name="email" className="border-black border-2"/>
                {/* Untuk input password */}
                <input type="password" name="password" className="border-black border-2"/>
                <button>Daftar</button>
            </form>
        </div>
    )
}

export default Register
