import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Reviews = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
  
    const onSubmit = userData => {
        const img = loggedInUser.img;
        const reviewDetail = {img , ...userData};
        fetch("https://desolate-falls-67613.herokuapp.com/addReview", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetail)
          })
          .then(res => res.json())
          .then(data =>{
            if(data){
                alert("Review Added Successfully!!!!!")
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
                                                    <input className="form-control" type="text" name="name"  placeholder="Your name" ref={register({ required: true })} />
                                                    {errors.name && <span>Name is required</span>}
                                                    <input className="form-control" placeholder="Company’s name, Designation" type="text" name="address" ref={register({ required: true })} />
                                                    {errors.address && <span>Company’s name is required</span>}
                                                    <textarea rows="3" className="form-control" placeholder="Project Details" type="text" name="description" ref={register({ required: true })} />
                                                    {errors.description && <span>Description is required</span>}  
                                                    <br/>                                     
                                                    <input type="submit" className="btn btn-primary register-btn btn-brand" value="Submit"/>
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

export default Reviews;