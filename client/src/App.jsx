import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Cookie from "js-cookie"
import axios from 'axios';
import UserContext from './components/contexts/UserContext';
function App() {
  const [user, setUser] = useState()
  const location = useLocation();
  const hideHeaderRoutes = ["/register-login"]; // Add the paths where you want to hide the header
  const shouldDisplayHeader = !hideHeaderRoutes.includes(location.pathname);
  useEffect(() => {

    const email = Cookie.get("email")
    const password = Cookie.get("password")
    const getUser = async () => {

      try {
        const logInData = {
          "email": email,
          "password": password
        };

        const response = await axios.post("http://localhost:3000/api/users/login", logInData);
        //response has the data of the user
        if (response.status === 200) { // Updated status check to 200 for successful login
          console.log("Login successful");

          setUser(response?.data?.userData)
        } else {
          Cookie.remove("email")
          Cookie.remove("password")
        }
      } catch (error) {
        Cookie.remove("email")
        Cookie.remove("password")
        console.error("Error loging in:", error);
      }
    }
    if (email && password) {
      getUser()
    }
  }, [Cookie.get("email")])
  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          isAuthenticated: !!user,
          setUser: setUser
        }}
      >

        {shouldDisplayHeader && <Header />}
        <Main />

      </UserContext.Provider>
    </>
  )
}

export default App
