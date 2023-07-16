import React, { useState } from "react";
import axios from "axios";

const RegisterLogin = () => {


  const handleLoginSubmit = async (e) => {
    try {
      const logInData = {
        "nick_name": e.target.logInNick.value,
        "email": e.target.logInEmail.value,
        "password": e.target.logInPassword.value
      };

      const response = await axios.post("http://localhost:3000/api/orders", logInData);

      if (response.status === 201) {
        console.log("Order created successfully");
        // Clear the shopping cart or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }

  const handleRegisterSubmit = async () => {
    try {
      const registerData = {
        "nick_name": e.target.registerNick.value,
        "email": e.target.registerEmail.value,
        "password": e.target.registerPassword.value
      };

      const response = await axios.post("http://localhost:3000/api/orders", registerData);

      if (response.status === 201) {
        console.log("Order created successfully");
        // Clear the shopping cart or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }


  return <>
    <form action="" onSubmit={handleLoginSubmit}>
      <input name="registerNick" type="text" placeholder="write your nick name" />
      <input name="registerEmail" type="text" placeholder="Write your email" />
      <input name="registerPassword" type="text" placeholder="write your password" />
      <button type="submit">Log in</button>
    </form>
    <p>Not registered yet? register down here</p>
    <form action="" onSubmit={handleRegisterSubmit}>
      <input name="logInNick" type="text" placeholder="Write a nick name" />
      <input name="logInEmail" type="text" placeholder="Place your email" />
      <input name="logInPassword" type="text" placeholder="Write a new password" />
      <button type="submit">Register</button>
    </form>
  </>;
};

export default RegisterLogin;
