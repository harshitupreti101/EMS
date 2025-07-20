import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
const TaskListNumbers = (props) => {
  const authData = useContext(AuthContext);
  
    if (!authData) {
      return <div>LOADING</div>
    }
    const {loggedInUser} = authData;
    // console.log(authData);
  return (
    <div id="task-list-numbers" className='flex mt-10 screen justify-between gap-5 overflow-auto'>
        <div className='rounded-xl px-4 lg:px-9 py-3 lg:py-6 w-[45%] bg-red-400'>
            <h1 className='text-xl lg:text-3xl font-semibold'>{loggedInUser.taskCounts.failed}</h1>
            <h3 className=' text-md lg:text-xl font-medium'>Failed Tasks</h3>
        </div>
        <div className='rounded-xl px-4 lg:px-9 py-3 lg:py-6 w-[45%] bg-blue-400'>
            <h1 className='text-xl lg:text-3xl font-semibold'>{loggedInUser.taskCounts.newTask}</h1>
            <h3 className='text-md lg:text-xl  font-medium'>New Tasks</h3>
        </div>
        <div className='rounded-xl px-4 lg:px-9 py-3 lg:py-6 w-[45%] bg-yellow-400'>
            <h1 className='text-xl lg:text-3xl font-semibold'>{loggedInUser.taskCounts.active}</h1>
            <h3 className='text-md lg:text-xl  font-medium'>Active Tasks</h3>
        </div>
        <div className='rounded-xl px-4 lg:px-9 py-3 lg:py-6 w-[45%] bg-green-400'>
            <h1 className='text-xl lg:text-3xl font-semibold'>{loggedInUser.taskCounts.completed}</h1>
            <h3 className='text-md lg:text-xl  font-medium'>Completed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers