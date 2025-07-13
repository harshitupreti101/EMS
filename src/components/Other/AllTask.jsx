import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider';
const AllTask = () => {
    const authData = useContext(AuthContext);
    if (!authData) {
        <div></div>
    }
  return (
    <div className='bg-[#272822] mt-5 mb-5 px-5 py-3 cursor-pointer'>
            <div className='bg-red-400 p-2 mb-2 flex justify-between rounded-sm font-bold'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>
            
        <div>
              {authData.employees.map((elem,id) => {
            return ( <div key={id} className='border-emerald-500 border-2 p-2 mb-2 bg flex justify-between rounded-sm' >
            <h2 className='text-lg font-medium pl-1 w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-500'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-emerald-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-700'>{elem.taskCounts.failed}</h5>
        </div> )
        })}
        </div>
    </div>
  )
}

export default AllTask