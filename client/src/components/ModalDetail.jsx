import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import imageDefault from "../assets/imageDefault.png"
import axios from 'axios'

function ModalDetail({closeModal,selectedData}) {

    const [modalDetail, setModalDetail] = useState([])
    const token = useSelector(state=>state.auth.token)
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
                        <p className="font-bold text-2xl">{selectedData.topik}</p>
                        <p className="mt-3">{selectedData.tanggal}</p>
                    </div>
                </div>
                <p className="text-xl bg-red-400 p-3 pl-5 font-semibold text-white mt-5 rounded-lg">{selectedData.nominal}</p>
                <p className="mt-3 text-sm">{selectedData.keterangan}</p>
            </div>
        </div>
    )
}

export default ModalDetail
