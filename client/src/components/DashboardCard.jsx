import React,{useState, useEffect} from 'react'
import ModalUpdate from './ModalUpdate'
import axios from '../axios'
import ModalDetail from './ModalDetail'

function DashboardCard({listen}) {

    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openModalDetail, setOpenModalDetail] = useState(false)
    const item = localStorage.getItem("token")

    console.log(item)
    
    useEffect(()=>{
        axios.get("http://localhost:4000/datatable",{headers : {
            token : item
        }}).then(res=>setData(res.data.datatable))
    },[listen])

    return (

    <div>
        {data.map((elemement,index)=>{
            return(
                <div className="pt-3 flex mx-32" key={elemement._id}>
                    <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400 cursor-pointer" onClick={()=>{
                        setOpenModalDetail(true)
                    }}>

                        <p>{elemement.tanggal}</p>
                        <p>{elemement.tipedata}</p>
                        <p>{elemement.nominal}</p>

                        

                    </div>
                    {openModalDetail && <ModalDetail closeModal={setOpenModalDetail} />}

                    <div>
                    <button onClick={()=>{
                        setOpenModal(true)
                        localStorage.setItem("_id",elemement._id)
                        }} className="border-transparent bg-red-400 text-white text-sm py-3 px-5 rounded-lg">=</button>
                        {openModal && <ModalUpdate closeModal={setOpenModal} />}
                    </div>
                </div>
            )
        })}
    </div>   
     )
}

export default DashboardCard
