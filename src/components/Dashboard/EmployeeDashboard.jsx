import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen w-screen bg-[#1C1C1C]'>
        <Header/>
        <TaskListNumbers />
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard