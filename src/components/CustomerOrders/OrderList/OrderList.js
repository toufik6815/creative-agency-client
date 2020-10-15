import React, { useEffect, useState } from "react";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import "../../Home/Services/Services.css";
import OrderDetailList from "../OrderDetailList/OrderDetailList";

const OrderList = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    return (
        <section className='Order_container'>
            <Sidebar></Sidebar>

            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        orders.map(order => <OrderDetailList key={order._id} order={order}></OrderDetailList>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OrderList;