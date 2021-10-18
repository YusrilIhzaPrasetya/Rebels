import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import imageDefault from "../assets/imageDefault.png"
import axios from 'axios'

function ModalDetail({closeModal,selectedData}) {

    const [modalDetail, setModalDetail] = useState(null)
    const token = useSelector(state=>state.auth.token)

    useEffect(()=>{
        axios.get(`http://localhost:4000/datatable/${selectedData._id}`,{headers : {
            token : token
        }}).then(res=>console.log(res))
    },[])

    return (
        <div className="fixed w-screen h-screen bg-black top-0 left-0 flex justify-center items-center bg-opacity-40">
            <div className="fixed p-6 w-1/3 bg-white drop-shadow-xl rounded-xl">
                <div className="flex flex-row-reverse mr-3">
                    <button className="font-bold mb-4 text-red-300" onClick={()=>{
                        closeModal(false)
                    }}>X</button>
                </div>
                <div className="flex">
                    <div>
                        <img src={imageDefault} alt="" className="w-40" />
                    </div>
                    <div className="ml-6">
                        <p className="font-bold text-2xl">Nama Topik</p>
                        <p className="mt-3">Tanggal</p>
                    </div>
                </div>
                <p className="text-xl bg-red-400 p-3 pl-5 font-semibold text-white mt-5 rounded-lg">Nominal</p>
                <p className="mt-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            </div>
        </div>
    )
}

export default ModalDetail
