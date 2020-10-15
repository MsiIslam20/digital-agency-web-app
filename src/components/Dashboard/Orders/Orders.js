import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Orders.css'

const Orders = () => {

    const {id} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch("https://desolate-falls-67613.herokuapp.com/orders/"+ id)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    }, [id])

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = userData => {
        const status = "pending"
        const {img} = {...service}
        const orderDetail = {img , ...userData, status};

        fetch("https://desolate-falls-67613.herokuapp.com/addOrder", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
          })
          .then(res => res.json())
          .then(data =>{
            if(data){
                history.push("/serviceList")
            }
        })
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
                                                    <input className="form-control" type="text" name="name" defaultValue={loggedInUser.name}  placeholder="Your name / company’s name" ref={register({ required: true })} />
                                                    {errors.name && <span>Name or Company name is required</span>}
                                                    <input className="form-control" placeholder="Your email address" type="email" defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} />
                                                    {errors.email && <span>Email is required</span>}
                                                    <input className="form-control" placeholder="Description" type="text" name="projectName" defaultValue={service.title} ref={register({ required: true })} />
                                                    {errors.projectName && <span>project Name is required</span>} 
                                                    <textarea rows="3" className="form-control" placeholder="Project Details" type="text" name="description" defaultValue={service.description} ref={register({ required: true })} />
                                                    {errors.description && <span>Description is required</span>}
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input className="form-control" placeholder="Price" type="text" name="price" ref={register({ required: true })} />
                                                            {errors.price && <span>Price is required</span>}
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input className="form-control" type="file" name="image" id="icon" ref={register({ required: true })} />
                                                            {errors.image && <span>Project File is required</span>}
                                                        </div>
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