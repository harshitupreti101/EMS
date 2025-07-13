import React from 'react'

const AcceptTask = (props) => {
  return (
    <div className="flex-shrink-0 flex flex-col w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-700/50 text-sm px-3 py-1 rounded'>{props.data.category}</h3>
              <h2 className='text-sm'>{props.data.taskDate}</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>{props.data.taskTitle}</h2>
          <p className='text-sm mt-3 text-gray-400'>{props.data.taskDescription}</p>
          <div className='flex flex-1 justify-between mt-4 items-end'>
            <button className='bg-green-800 py-[6px] px-2 text-sm rounded-sm cursor-pointer hover:bg-green-700'>Mark as completed</button>
            <button className='bg-red-800 py-[7px] px-2 text-sm rounded-sm cursor-pointer hover:bg-red-700'>Mark as Failed</button>
          </div>
      </div>
  )
}

export default AcceptTask