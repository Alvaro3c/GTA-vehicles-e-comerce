import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const RegisterLogin = () => {
  const isMounted = useRef(true); // Create a ref to track component's mount status
  const [registerData, setRegisterData] = useState({});

  useEffect(() => {
    // Set isMounted to false when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const logInData = {
        "nick_name": e.target.logInNick.value,
        "email": e.target.logInEmail.value,
        "password": e.target.logInPassword.value
      };

      const response = await axios.post("http://localhost:3000/api/orders", logInData);

      if (response.status === 201 && isMounted.current) {
        console.log("Order created successfully");
        // Clear the shopping cart or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error creating order:", error);
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

      const response = await axios.post("http://localhost:3000/api/users/register", registerData);

      if (response.status === 201 && isMounted.current) {
        console.log("User has been registered");
        // Clear the shopping cart or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleRegisterSubmit}>
        <input name="registerNick" type="text" placeholder="Write a nick name" />
        <input name="registerEmail" type="text" placeholder="Place your email" />
        <input name="registerPassword" type="text" placeholder="Write a new password" />
        <button type="submit">Register</button>
      </form>
      <p>Not registered yet? register down here</p>
      <form action="" onSubmit={handleLoginSubmit}>
        <input name="logInNick" type="text" placeholder="write your nick name" />
        <input name="logInEmail" type="text" placeholder="Write your email" />
        <input name="logInPassword" type="text" placeholder="write your password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default RegisterLogin;
