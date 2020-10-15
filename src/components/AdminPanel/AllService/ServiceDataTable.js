import React from 'react';

const ServiceDataTable = ({allOrders}) => {

    const handleStatusChange = (e, id) => {
        const status = e.target.value;
        fetch("https://desolate-falls-67613.herokuapp.com/update/"+id, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status})
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert("Updated Successfully!!")
            }
        })
    }

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  allOrders.map(order => 
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.projectName}</td>
                        <td>{order.description}</td>
                        
                        <td>
                            <select onChange={(e) => handleStatusChange(e, order._id)} defaultValue={order.status}>
                                <option value="Pending">Pending</option>
                                <option value="On Going">On Going</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ServiceDataTable;