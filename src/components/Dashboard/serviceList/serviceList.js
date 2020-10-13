import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css'

const ServiceList = () => {
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
                                       <li>Saidul</li>
                                   </ul>
                                   <div className="order-form">
                                       <div className="row">
                                           <div className="col-md-10">
                                               <div className="service-list">
                                                   <div className="row">
                                                       <div className="col-md-6">
                                                           <div className="list-inner">

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
               </div>
            </div> 
        </section>
    );
};

export default ServiceList;