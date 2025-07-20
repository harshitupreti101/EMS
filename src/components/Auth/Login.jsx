import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthProvider';
const Login = () => {
  const authData = useContext(AuthContext);
  if (!authData) {
    return <div>LOADING</div>
  }
  const {loginHandler} = authData;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailHandler = (e) => {
      setemail(e.target.value);
  }
  const passwordHandler = (e) =>{
     setpassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(email,password);
    setemail("");
    setpassword("");
  } 

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className='rounded-xl p-10 lg:p-20 border-2 border-emerald-600'>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                <input onChange={emailHandler} className='py-2 lg:py-3 px-2 lg:px-5 border-2 border-emerald-600 rounded-full  text-xl text-white outline-none placeholder:text-gray-400 placeholder:pl-2' value ={email} type="email"  placeholder='Enter your email'/>
                <input onChange={passwordHandler} className='py-2 lg:py-3 px-2 lg:px-5 mt-5 border-2 border-emerald-600 rounded-full  text-xl text-white outline-none placeholder:text-gray-400 placeholder:pl-2' value={password} type="password" placeholder='Enter password' />
                <button className='py-2 lg:py-3 px-2 lg:px-5 w-full mt-5 border-2 bg-emerald-600 rounded-full  text-xl text-white outline-none cursor-pointer border-none' type="submit">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login