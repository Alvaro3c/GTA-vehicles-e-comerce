import React from "react";
import { useUserContext } from "../contexts/UserContext";

const PastOrders = () => {
  const userData = useUserContext()
  console.log(userData)
  return <>
    {userData?.user?.nick_name}
  </>;
};

export default PastOrders;
