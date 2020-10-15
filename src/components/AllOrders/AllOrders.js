import React, { useEffect, useState } from "react";
import OrderDataTable from "../Dashboard/OrderDataTable/OrderDataTable";
import Sidebar from "../Dashboard/Sidebar/Sidebar";


const AllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://hidden-chamber-33509.herokuapp.com/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data));
    }, [])

    return (
        <div>
            <div className="container-fluid row " >
                <Sidebar></Sidebar>

                <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">All Orders</h5>
                    
                    <OrderDataTable orders={orders}/>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;