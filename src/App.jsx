import React,{useContext, useState,useEffect} from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './components/Auth/AuthProvider.jsx'

const App = () => {
  const authData = useContext(AuthContext);

  if (!authData) {
    return <div>LOADING</div>
  }
  const {user} = authData;

  return (
      <>
          {!user && <Login/>}
          {user === "user" ? <EmployeeDashboard /> : ""}
          {user === "admin" ? <AdminDashboard/> : ""}
      </>
  )
}
export default App
