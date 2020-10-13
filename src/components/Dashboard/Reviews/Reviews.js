import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
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

export default Reviews;