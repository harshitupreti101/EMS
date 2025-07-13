import React from 'react'

const NewTask = (props) => {
  return (
    <div className="flex-shrink-0 flex flex-col w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-emerald-700/50 text-sm px-3 py-1 rounded'>{props.data.category}</h3>
              <h2 className='text-sm'>{props.data.taskDate}</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>{props.data.taskTitle}</h2>
          <p className='text-sm mt-3 text-gray-400'>{props.data.taskDescription}</p>
          <div className='mt-4 flex flex-1 items-end'>
            <button  className='w-full mt-2 p-1 rounded-sm bg-blue-800 cursor-pointer hover:bg-blue-700'>Accept Task</button>
          </div>
      </div>
  )
}

export default NewTask