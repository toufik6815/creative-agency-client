import React from 'react';
import './OrderDataTable.css';

const OrderDataTable = ({orders}) => {
    return (
        <div className='table_container'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="co-md-2">Name</th>
                        <th className="co-md-2">Email</th>
                        <th className="co-md-2">Service</th>
                        <th className="co-md-2" >Project Details</th>
                        <th className="co-md-2">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orders.map(orders =>

                            <tr>
                                <td>{orders.name}</td>
                                <td>{orders.email}</td>
                                <td>{orders.service}</td>
                                <td>{orders.project}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
       </div>
    );
};

export default OrderDataTable;