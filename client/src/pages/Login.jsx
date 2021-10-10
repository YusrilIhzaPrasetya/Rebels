import React from 'react'

function Login() {
    return (
        <div>
            <form action="">
                {/* Untuk input email */}
                <input type="text" className="border-black border-2"/>
                {/* Untuk input password */}
                <input type="text" className="border-black border-2"/>
                <button>Masuk</button>
            </form>
        </div>
    )
}

export default Login