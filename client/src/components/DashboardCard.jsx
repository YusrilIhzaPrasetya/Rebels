import React,{useState, useEffect} from 'react'
import ModalUpdate from './ModalUpdate'
import axios from '../axios'

function DashboardCard() {

    const [data, setData] = useState([])

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

    const item = localStorage.getItem("token")

    useEffect(()=>{
        axios.get("http://localhost:4000/datatable", {headers : {
            token : item
        }}).then(res=>console.log(res.data.datatable))
    },[])

    return (
        <div className="pt-20 flex mx-32">
            <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400 cursor-pointer" onClick={()=>{
                setOpenModal(true)
            }}>
                <p>Jenis Aktifitas</p>
                <p>Tanggal Waktu</p>
                <p>Nominal</p>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
                {data.map((element,index)=>{
                    return(
                        <div>
                            <p>{element.tipedata}</p>
                            <p>{element.tanggal}</p>
                            <p>{element.nominal}</p>
                        </div>
                    )
                })}
            </div>
                <button onClick={()=>{
                    setOpenModal(true)
                }} className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
        </div>
    )
}

export default DashboardCard
