import React from 'react';
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <div>
            <div className="flex justify-between mx-32 mt-6">
                <p className="font-semibold">Logo</p>
                <div className="flex">
                    <Link to="/login">
                        <button className="border-transparent bg-green-500 text-white w-28 mr-6   text-sm p-3 rounded-lg">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="border-transparent bg-green-500 text-white w-28 text-sm p-3 rounded-lg">Registrasi</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
