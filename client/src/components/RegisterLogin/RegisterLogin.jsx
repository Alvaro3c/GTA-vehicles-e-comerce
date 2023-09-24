import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import UserContext, { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './RegisterLogin.css'
import Swal from 'sweetalert2';



const RegisterLogin = () => {
  const isMounted = useRef(true); // Create a ref to track component's mount status
  const [registerData, setRegisterData] = useState({});
  const userData = useUserContext()
  useEffect(() => {
    // Set isMounted to false when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);
  const navigate = useNavigate(); // Get the navigate function

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const logInData = {
        "email": e.target.logInEmail.value,
        "password": e.target.logInPassword.value
      };

      const response = await axios.post("https://gta-rides-e-comerce.onrender.com/api/users/login", logInData);

      if (response.status === 200) { // Updated status check to 200 for successful login
        console.log("Login successful");
        Cookies.set("email", e.target.logInEmail.value)
        Cookies.set("password", e.target.logInPassword.value)
        userData.setUser(response?.data?.userData)
        // Redirect to the home page on successful login
        navigate("/home");
      }
    } catch (error) {
      console.error("Error loging in:", error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        "nick_name": e.target.registerNick.value,
        "email": e.target.registerEmail.value,
        "password": e.target.registerPassword.value
      };
      setRegisterData(registerData);

      const response = await axios.post("https://gta-rides-e-comerce.onrender.com/api/users/register", registerData);

      if (response.status === 201) {
        console.log("User has been registered");
        Cookies.set("email", e.target.registerEmail.value)
        Cookies.set("password", e.target.registerPassword.value)


        userData.setUser(response?.data?.userData)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-right',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
        await Toast.fire({
          icon: 'success',
          title: 'You have been registered'
        })
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <h1>Welcome to GTA rides</h1>
      <section id="forms">
        <p>Log in</p>
        <form action="" className="auth-forms" onSubmit={handleLoginSubmit} id="login-form">
          <input name="logInEmail" type="text" placeholder="Write your email" />
          <input name="logInPassword" type="password" placeholder="write your password" />
          <button type="submit" className="form-btn">Log in</button>
        </form>
        <p>Not registered yet? register down here</p>
        <form action="" className="auth-forms" onSubmit={handleRegisterSubmit} id="register-form">
          <input name="registerNick" type="text" placeholder="Write a nick name" />
          <input name="registerEmail" type="text" placeholder="Place your email" />
          <input name="registerPassword" type="password" placeholder="Write a new password" />
          <button type="submit" className="form-btn">Register</button>
        </form>
      </section>
    </>
  );
};

export default RegisterLogin;
