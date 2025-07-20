import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider';
const AllTask = () => {
  const authData = useContext(AuthContext);
  if (!authData) {
    <div></div>
  }
  return (
    <div className='bg-[#272822] mt-5 mb-5 px-3 lg:px-5 py-3 cursor-pointer'>
      <div className='text-sm lg:text-base bg-red-400 p-2 mb-2 flex justify-between rounded-sm lg:font-bold'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='ml-3 w-1/5'>New Task</h3>
        <h5 className='ml-2 w-1/5'>Active Task</h5>
        <h5 className='ml-2 w-1/5'>Completed</h5>
        <h5 className='ml-4 w-1/5'>Failed</h5>
      </div>

      <div>
        {authData.employees.map((elem, id) => {
          return (<div key={id} className='border-emerald-500 border-2 p-3 lg:p-2 mb-2 bg flex justify-between rounded-sm text-sm lg:text-lg' >
            <h2 className='font-medium w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='ml-3 font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
            <h5 className='font-medium w-1/5 text-yellow-500'>{elem.taskCounts.active}</h5>
            <h5 className='font-medium w-1/5 text-emerald-600'>{elem.taskCounts.completed}</h5>
            <h5 className='pl-3 font-medium w-1/5 text-red-700'>{elem.taskCounts.failed}</h5>
          </div>)
        })}
      </div>  
    </div>
  )
}

export default AllTask