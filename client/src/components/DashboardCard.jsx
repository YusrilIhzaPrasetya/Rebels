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
        }}).then(res=>setData(res.data.datatable))
    },[])

    return (

    <div>
        {data.map((elemement,index)=>{
            return(
                <div className="pt-3 flex mx-32">
                    <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400 cursor-pointer" onClick={()=>{
                        setOpenModal(true)
                    }}>

                        <p>{elemement.tipedata}</p>
                        <p>{elemement.tanggal}</p>
                        <p>{elemement.nominal}</p>

                    {openModal && <ModalUpdate closeModal={setOpenModal} />}

                    </div>
                    <button onClick={()=>{
                    setOpenModal(true)
                }} className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
                {openModal && <ModalUpdate closeModal={setOpenModal} />}
                </div>
            )
        })}
    </div>   
     )
}

export default DashboardCard
