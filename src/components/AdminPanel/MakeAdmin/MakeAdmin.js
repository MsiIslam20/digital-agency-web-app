import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [email, setEmail] = useState({});

    const handleBlur = e => {
        const newEmail = { ...email };
        newEmail[e.target.name] = e.target.value;
        setEmail(newEmail);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://desolate-falls-67613.herokuapp.com/makeAdmin", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
          })
          .then(res => res.json())
          .then(data =>{
            if(data){
                alert("Admin Added Successfully!!!!!")
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
                                       <li>Services list</li>
                                       <li>{loggedInUser.name}</li>
                                   </ul>
                                   <div className="order-form">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Email</label>
                                                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default MakeAdmin;