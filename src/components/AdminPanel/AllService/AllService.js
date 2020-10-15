import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ServiceDataTable from './ServiceDataTable';
import './AllService.css'

const AllService = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://desolate-falls-67613.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    return (
        <section className="order-wrapper hidden">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-12 px-0">
                       <div className="row">
                           <Sidebar />
                           <div className="col-md-9 pl-0">
                               <div className="order-details">
                                   <ul className="list-unstyled d-flex justify-content-between">
                                       <li>Services list</li>
                                       <li>{loggedInUser.name}</li>
                                   </ul>
                                   <div className="order-form">
                                       <ServiceDataTable allOrders={allOrders} key={allOrders._id}></ServiceDataTable>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div> 
        </section>
    );
};

export default AllService;