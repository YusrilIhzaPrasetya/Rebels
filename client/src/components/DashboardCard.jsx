import React,{useState, useEffect} from 'react'
import ModalUpdate from './ModalUpdate'
import axios from '../axios'
import ModalDetail from './ModalDetail'

function DashboardCard({listen}) {

    const [data, setData] = useState([])
    const [selectedData, setSelectedData] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openModalDetail, setOpenModalDetail] = useState(false)
    const item = localStorage.getItem("token")
    const [value , setValue] = useState(0)
    const nominal = []


    const detailData = (id) => {
        data.map((xample)=>{
            if(xample._id===id){
                setSelectedData(xample)
            }
        })
    }
    
    for(let i =0 ; i< data.length ; i++){
        if(data[i].tipedata == "pemasukan"){
            nominal.push(parseInt(data[i].nominal))
        }else{
            nominal.push(parseInt(-data[i].nominal))
        }
    }
    var sum = nominal.reduce(function(a,b){return a+b; },0)
   
    const deleteData = async (id) =>{
        // data.map((xample)=>{
        //     if(xample._id===id){
        //         setSelectedData(xample)
        //     }
        // })
        const result = await axios({
            headers : {
                token : item
            },
            method : "DELETE",
            url : `http://localhost:4000/datatable/${id}`,
        })
    }
    
    useEffect(()=>{
        axios.get("http://localhost:4000/datatable",{headers : {
            token : item
        }}).then(res=>setData(res.data.datatable))
    },[listen])
    
    


    return (

    <div>
            <div className='pt-3 mx-32 flex flex-row justify-between'>
                <p>Total Simpanan</p> 
                <p>{sum}</p>
            </div>
        {data.map((elemement,index)=>{ 
            return(
                
                <div className="pt-3 flex mx-32" key={elemement._id}>
                    
                    <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400 cursor-pointer" onClick={()=>{
                        setOpenModalDetail(true)
                        detailData(elemement._id)
                    }}>
                        <p>{elemement.tanggal}</p>
                        <p>{elemement.tipedata}</p>
                        <p>{elemement.nominal}</p>

                    </div>

                    
                    {openModalDetail && <ModalDetail 
                        closeModal={setOpenModalDetail}
                        selectedData={selectedData}
                        
                    />}

                    <div className="flex flex-row ">
                    <button onClick={()=>{
                        setOpenModal(true) 
                        localStorage.setItem("_id",elemement._id)
                        }} className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
                        {openModal && <ModalUpdate closeModal={setOpenModal}/>}
                    <button  onClick={()=> {deleteData(elemement._id) }} className="border-transparent bg-red-400 text-white text-sm py-3 px-5 rounded-lg" >&times;</button>
                    </div>
                </div>
            
            )
        })}
    </div>   
     )
}

export default DashboardCard
