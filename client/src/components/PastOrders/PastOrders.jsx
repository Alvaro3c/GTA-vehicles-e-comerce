import React, { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import OrderCard from "../PastOrders/OrderCard/OrderCard"

const PastOrders = () => {
  const userData = useUserContext()
  const baseUrl = 'http://localhost:3000/api/orders/'
  const [orderData, setOrderData] = useState([]);


  useEffect(() => {
    const getPastOrders = async () => {

      let response = await fetch(baseUrl + userData?.user?.id_user)
      let orderData = await response.json()
      setOrderData(orderData);
      console.log(orderData)
    }


    if (userData?.user?.id_user) {
      getPastOrders()
    }
  }, [userData?.user])
  return <>
    {userData?.user?.nick_name}
    {orderData.map((order, index) => (
      <OrderCard
        key={index}
        orderId={order.id_order}
        totalCost={order.total_cost}
        orderDate={order.order_date}
        cars={order.cars}
      />
    ))}
  </>
};

export default PastOrders;
