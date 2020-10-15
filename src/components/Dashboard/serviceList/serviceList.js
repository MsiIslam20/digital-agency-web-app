import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css'
import SingleServiceList from './SingleServiceList';

const ServiceList = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-falls-67613.herokuapp.com/serviceList?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
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
                                       <li>Order</li>
                                       <li>{loggedInUser.name}</li>
                                   </ul>
                                   <div className="order-form">
                                       <div className="row">
                                           <div className="col-md-10">
                                               <div className="service-list">
                                                   <div className="row">
                                                       {
                                                           orders.map(order => <SingleServiceList order={order} key={order._id}></SingleServiceList>)
                                                       }
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
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

export default ServiceList;