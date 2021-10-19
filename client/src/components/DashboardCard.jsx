import React,{useState, useEffect} from 'react'
import ModalUpdate from './ModalUpdate'
import axios from '../axios'

function DashboardCard({listen}) {

    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    
    // const item = localStorage.getItem("token")
    const item = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjhlYTkwYWMwMjdmYzQxMWY3NWE3NiIsIm5hbWEiOiJhbGltIiwiZW1haWwiOiJhbGltQG1haWwuY29tIiwiaWF0IjoxNjM0NTIzMjQ1fQ.-c6u0wbL1I-z1_p_GwE-mPB41uBocjkP8TyMJwvtVHk"
   
    console.log(item)
    useEffect(()=>{
        axios.get("http://localhost:4000/datatable",{headers : {
            token : item
        }}).then(res=>setData(res.data.datatable))
    },[listen])
    console.log(item)
    

    return (

    <div>
        {data.map((elemement,index)=>{
            return(
                <div className="pt-3 flex mx-32" key={elemement._id}>
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
