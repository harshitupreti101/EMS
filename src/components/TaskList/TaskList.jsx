import React, {useContext} from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import { FailedTask } from './FailedTask'
import { AuthContext } from '../Auth/AuthProvider'
const TaskList = () => {
    const authData = useContext(AuthContext);
    
      if (!authData) {
        return <div>LOADING</div>
      }
      const {loggedInUser} = authData;
    return (
        <div id="TaskList" className='overflow-x-auto w-full h-1/2 flex gap-5 items-center mt-16 p-2'>
             {loggedInUser.tasks.map((elem,id)=> {
                if (elem.active) {
                    return <AcceptTask key={id} data={elem}/>
                }
                if (elem.newTask) {
                    return <NewTask key={id} data={elem}/>
                }
                 if (elem.completed) {
                    return <CompleteTask key={id} data={elem}/>
                }
                 if (elem.failed) {
                    return <FailedTask key={id} data={elem}/>
                }
            })}

            {/* <div className="flex-shrink-0 w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-700/50 text-sm px-3 py-1 rounded'>High</h3>
              <h2 className='text-sm'>8-7-2024</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>Make a react Project</h2>
          <p className='text-sm mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore provident sit doloremque laboriosam!</p>
      </div>
       <div className="flex-shrink-0 w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-yellow-600/50 text-sm px-3 py-1 rounded'>High</h3>
              <h2 className='text-sm'>8-7-2024</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>Make a react Project</h2>
          <p className='text-sm mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore provident sit doloremque laboriosam!</p>
      </div>
       <div className="flex-shrink-0 w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-700/50 text-sm px-3 py-1 rounded'>High</h3>
              <h2 className='text-sm'>8-7-2024</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>Make a react Project</h2>
          <p className='text-sm mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore provident sit doloremque laboriosam!</p>
      </div>

       <div className="flex-shrink-0 w-[300px] h-full bg-gray-800 rounded-xl p-5 text-white">
          <div className='flex justify-between items-center'>
              <h3 className='bg-emerald-700/50 text-sm px-3 py-1 rounded'>High</h3>
              <h2 className='text-sm'>8-7-2024</h2>
          </div>
          <h2 className='mt-6 text-2xl font-bold'>Make a react Project</h2>
          <p className='text-sm mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore provident sit doloremque laboriosam!</p>
      </div> */}



        </div>
    )
}

export default TaskList