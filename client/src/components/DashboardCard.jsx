import React from 'react'

function DashboardCard() {
    return (
        <div className="pt-20 flex mx-32">
            <div className="flex flex-row mr-8 justify-between w-screen py-3 px-8 rounded-lg bg-gray-400">
                <p>Jenis Aktifitas</p>
                <p>Tanggal Waktu</p>
                <p>Nominal</p>
            </div>
                <button className="border-transparent bg-green-500 text-white text-sm py-3 px-5 rounded-lg">=</button>
        </div>
    )
}

export default DashboardCard
