import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Orders.css'

const Orders = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = userData => {

    }

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
                                           <div className="col-md-7">
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <input className="form-control" type="text" name="name"  placeholder="Your name / company’s name" ref={register({ required: true })} />
                                                    {errors.name && <span>Name or Company name is required</span>}
                                                    <input className="form-control" placeholder="Your email address" type="email" name="email" ref={register({ required: true })} />
                                                    {errors.email && <span>Email is required</span>}
                                                    <input className="form-control" placeholder="Description" type="text" name="projectName" ref={register({ required: true })} />
                                                    {errors.projectName && <span>project Name is required</span>} 
                                                    <textarea rows="3" className="form-control" placeholder="Project Details" type="text" name="description" ref={register({ required: true })} />
                                                    {errors.description && <span>Description is required</span>}                                             
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input className="form-control" placeholder="Price" type="text" name="price" ref={register({ required: true })} />
                                                            {errors.price && <span>Price is required</span>}
                                                        </div>
                                                        {/* <div className="col-md-6">
                                                            <input className="form-control" placeholder="Organize books at the library." type="text" name="vnName" ref={register({ required: true })} />
                                                            {errors.vnName && <span>Volunteer name is required</span>}
                                                        </div> */}
                                                    </div>
                                                    <input type="submit" className="btn btn-primary register-btn btn-brand" value="Send"/>
                                                </form>
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

export default Orders;