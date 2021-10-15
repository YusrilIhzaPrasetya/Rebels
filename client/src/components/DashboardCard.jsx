import React,{useState} from 'react'
import ModalUpdate from './ModalUpdate'

function DashboardCard() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="pt-20 flex mx-32">
            <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400 cursor-pointer" onClick={()=>{
                setOpenModal(true)
            }}>
                <p>Jenis Aktifitas</p>
                <p>Tanggal Waktu</p>
                <p>Nominal</p>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
            </div>
                <button onClick={()=>{
                    setOpenModal(true)
                }} className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
        </div>
    )
}

export default DashboardCard
