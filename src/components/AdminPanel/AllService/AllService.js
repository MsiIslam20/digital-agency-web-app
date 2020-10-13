import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllService = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
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