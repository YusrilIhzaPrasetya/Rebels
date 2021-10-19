import React, {useState} from 'react'
import DashboardCard from '../components/DashboardCard'
import ModalCreate from '../components/ModalCreate'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Link, useHistory } from "react-router-dom";

function Main() {

    const history = useHistory()

    const [listen, setListen] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const logAs = useSelector(state => state.logAs)
    const isLogin = useSelector(state => state.isLogin)

    const logout = (e) => {
        e.preventDefault()
        dispatch({type : "LOGOUT"})
        localStorage.removeItem("token");
        localStorage.removeItem("authAs");
        history.push('/login')
 
      }
      
    return (
        <div className="min-h-screen">
            <div className="flex content-between justify-between mx-32 mt-7 mb-16">
                <div><p>Logo</p></div>
                <div>
                
                    <button onClick={logout} className="border-transparent bg-green-500  text-white w-28 text-sm p-3 rounded-lg">Logout</button>
                
            
                    <button className="border-transparent text-md font-semibold mx-6">Bantuan</button>
                    <button className="border-transparent bg-green-500 text-white text-sm p-3 rounded-lg" onClick={()=>{
                        setOpenModal(true)
                    }}>Tambah Aktifitas</button>
                    {openModal && <ModalCreate closeModal={setOpenModal} listen={listen} setListen={setListen} />}
                </div>
            </div>
            <div>
                <DashboardCard listen={listen} />
            </div>
        </div>
    )
}

export default Main
