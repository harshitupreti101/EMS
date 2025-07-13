import React from 'react'

export const FailedTask = (props) => {
  return (
    <div className="flex-shrink-0 flex flex-col w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-700/50 text-sm px-3 py-1 rounded'>{props.data.category}</h3>
              <h2 className='text-sm'>{props.data.date}</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>{props.data.taskTitle}</h2>
          <p className='text-sm mt-3 text-gray-400'>{props.data.taskDescription}</p>
          <div className='mt-2 flex flex-1 items-end'>
            <button className='w-full mt-2 p-1 rounded-sm bg-red-800 cursor-pointer hover:bg-red-700'>Failed</button>
          </div>
      </div>
  )
}
