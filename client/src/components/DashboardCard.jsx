import React,{useState} from 'react'
import ModalUpdate from './ModalUpdate'

function DashboardCard() {

    const [openModal, setOpenModal] = useState(false)
    const tambahData =(event)=>{

        event.preventDefault()
        let topik = event.target.topik.value;
        let nominal = event.target.nominal.value;
        let tanggal = event.target.tanggal.value;
        let foto = event.target.foto.value;
        let tipedata = "pemasukan";

    const data = {
        topik,
        nominal,
        tanggal,
        foto,
        tipedata,
    }
console.log(data)
        const result =  fetch(`http://localhost:4000/datatable`,{
            method: `POST`, 
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        } ).then((res) => res.json())
    }
    return (
        <div className="pt-20 flex mx-32">
            <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400">
                <p>Jenis Aktifitas</p>
                <p>Tanggal Waktu</p>
                <p>Nominal</p>
            </div>
                <button onClick={()=>{
                    setOpenModal(true)
                }} className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
        </div>
    )
}

export default DashboardCard
