import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../../utils/localStorage.jsx'
export const AuthContext = createContext();

const AuthProvider = (props) => {
  
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")));
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
  if (!employees || !admin) {
    return <div>loading</div>
  }

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser") ? JSON.parse(localStorage.getItem("loggedInUser")) : null);

  useEffect(() => {

    if (loggedInUser != null) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      if (loggedInUser.id != 101) {
        setUser("user");
      }
      else {
        setUser("admin");
      }
    }

  }, [loggedInUser]);

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUser(null);
  };

  const loginHandler = (email, password) => {

    if (employees.find((e) => e.email === email && e.password === password)) {
      setLoggedInUser(employees.find((e) => e.email === email && e.password === password));
    }
    else if (admin.email === email && admin.password === password) {
      setLoggedInUser(admin);
    }
    else alert('Invalid Login Credentials');
  }

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData({ employees, admin, loggedInUser, loginHandler, user, setLoggedInUser, setUser, logoutHandler });
  }, [loggedInUser, user])


  return (
    <AuthContext.Provider value={userData} >{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider