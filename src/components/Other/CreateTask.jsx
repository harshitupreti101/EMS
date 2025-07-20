import React, { useEffect, useState ,useContext} from 'react'
import { AuthContext } from '../Auth/AuthProvider';

const CreateTask = () => {
  const authData = useContext(AuthContext);
  const {setEmployees} = authData;
  const [date, setDate] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDiscription] = useState("");
  const [tasks, setTasks] = useState(null)
  useEffect(() => {
        if (!tasks) return;
        const employees = JSON.parse(localStorage.getItem("employees") || "[]");
        employees.forEach((elem)=>{
            if (elem.firstName === assignTo){
                elem.tasks.push(tasks);
            }
            if (employees) localStorage.setItem("employees",JSON.stringify(employees));
            setEmployees(employees);
            setDate("");
            setTaskTitle("");
            setAssignTo("");
            setCategory("");
            setDiscription("");
     })
    }, [tasks])

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks({
        taskTitle:taskTitle,
        taskDescription: description,
        taskDate: date,
        category: category,
        active: true,
        newTask: true,
        completed: false,
        failed: false
    })
  }

  return (
    <div>
        <form onSubmit={(e)=> {submitHandler(e)}} className='flex justify-between flex-wrap bg-[#272822] px-4 lg:px-8 py-4 mt-4 rounded-sm text-sm lg:text-base'>
            <div className='w-3/5'>
                <div>
                    <h3>Task Title</h3>
                    <input onChange={(e)=> {setTaskTitle(e.target.value);}} value={taskTitle} className="border-2  border-gray-400 rounded-sm w-2/3 p-[2px] lg:p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                </div>
                <div className='mt-4'> 
                    <h3>Date</h3>
                    <input onChange={(e)=>{setDate(e.target.value);}} value={date} className="border-2 border-gray-400 rounded-sm w-2/3 p-[2px] lg:p-1 placeholder:pl-2 placeholder:text-sm" type="date" placeholder="Make a UI design" />
                </div>
                <div className='mt-4'>
                    <h3>Assign to</h3>
                    <input onChange={(e)=>{ setAssignTo(e.target.value);}} value={assignTo} className="border-2 border-gray-400 rounded-sm w-2/3 p-[2px] lg:p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                </div>
                    <div className='mt-4'>
                    <h3>Category</h3>
                    <input onChange={(e)=>{ setCategory(e.target.value);}} value={category} className="border-2 border-gray-400 rounded-sm w-2/3 p-[2px] lg:p-1 placeholder:pl-2 placeholder:text-sm" type="text" placeholder="Make a UI design" />
                </div>
            </div>
            <div className='w-2/5 flex flex-col'>
                <h3>Description</h3>
                <textarea onChange={(e)=>{ setDiscription(e.target.value);}} value={description} className="p-1 border-2 border-gray-400 w-full rounded-sm resize-none" name="" id="" cols="30" rows="7" placeholder='write description here'></textarea>
                <button className='bg-emerald-600 w-full mt-4.5 p-3 rounded-sm hover:bg-emerald-500 cursor-pointer'>Create Task</button>
            </div> 
            
        </form>
    </div>
  )
}

export default CreateTask