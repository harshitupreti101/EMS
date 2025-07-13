import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
const TaskListNumbers = (props) => {
  const authData = useContext(AuthContext);
  
    if (!authData) {
      return <div>LOADING</div>
    }
    const {loggedInUser} = authData;
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
            <h1 className='text-3xl font-semibold'>{loggedInUser.taskCounts.failed}</h1>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
            <h1 className='text-3xl font-semibold'>{loggedInUser.taskCounts.newTask}</h1>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
            <h1 className='text-3xl font-semibold'>{loggedInUser.taskCounts.active}</h1>
            <h3 className='text-xl font-medium'>Active Tasks</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
            <h1 className='text-3xl font-semibold'>{loggedInUser.taskCounts.completed}</h1>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers