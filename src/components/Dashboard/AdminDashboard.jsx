import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = () => {
    return (
        <div className='px-5 lg:px-10 pt-4 lg:pt-8 flex flex-col bg-[#1C1C1C]'>
            <Header/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard