import React from 'react';
import '../Order/Order.css';

const OrderDetailList = ({ order }) => {
    return (
        <div className="col-md-4 text-center order_container">
            <div className="row d-flex justify-content-center ">
                {
                    order.image ? <img style={{ height: '60px' }} src={`data:image/png;base64,${order.image.img}`} alt="" />
                    :
                    <img style={{ height: '60px' }} className="img-fluid mb-3" src={`http://localhost:5000/${order.img}`} alt="" />
                }
            </div>
            
            <h5 className="">{order.service}</h5>
            <h4><small>{order.project}</small></h4>
        </div>
    );
};

export default OrderDetailList;