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
        </div>
    )
}

export default TaskList