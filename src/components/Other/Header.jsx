import React,{useContext} from 'react'
import AuthProvider, { AuthContext } from '../Auth/AuthProvider'
const Header = () => {
  const authData = useContext(AuthContext);
  if (!authData) {
    return <div>LOADING</div>
  }
  const {logoutHandler,loggedInUser} = authData;

  return (
    <div className='text-white flex items-center justify-between '>
        <h1 className='text-xl lg:text-2xl font-medium'>Hello <br/><span className='text-2xl lg:text-3xl font-semibold'>{loggedInUser.firstName}👋</span> </h1>
        <button onClick={logoutHandler} className='bg-red-600 text-white px-5 py-2 rounded-sm text-xl  outline-none cursor-pointer hover:bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header