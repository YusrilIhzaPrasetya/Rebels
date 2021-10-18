import React, {useState} from 'react'
import DashboardCard from '../components/DashboardCard'
import ModalCreate from '../components/ModalCreate'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory } from "react-router-dom";

function Main() {

    const [listen, setListen] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const logAs = useSelector(state => state.logAs)
    const isLogin = useSelector(state => state.isLogin)

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        localStorage.removeItem("authAs");
        console.log("ini jalan")
      }
      
    return (
        <div className="min-h-screen">
            <div className="flex content-between justify-between mx-32 mt-7 mb-16">
                <div><p>Logo</p></div>
                <div>
                    <button className="border-transparent text-md font-semibold mx-6">Bantuan</button>
                    <button className="border-transparent bg-green-500 text-white text-sm p-3 rounded-lg" onClick={()=>{
                      setOpenModal(true)
                    }}>Tambah Aktifitas</button>
                      <button onclick={logout}className="border-transparent bg-green-500 text-white w-28 text-sm ml-3 p-3 rounded-lg">Logout</button>
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
