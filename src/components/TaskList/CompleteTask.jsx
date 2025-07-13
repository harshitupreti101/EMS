import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 flex flex-col w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-emerald-700/50 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h2 className='text-sm'>{data.taskDate}</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>{data.taskTitle}</h2>
          <p className='text-sm mt-3 text-gray-400'>{data.taskDescription}</p>
          <div className='mt-2 flex flex-1 items-end'>
            <button className='w-full mt-2 p-1 rounded-sm bg-green-800 cursor-pointer hover:bg-green-700'>Complete</button>
          </div>
      </div>
  )
}

export default CompleteTask