import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const admins = [
    {
        email: 'mohammadsaidul2k19@gmail.com'
    },
    {
        email: 'shakil01794@gmail.com'
    },
    {
        email: 'programming.hero.instructor@gmail.com'
    },
];

const AddService = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const handleAddProduct = () => {
        fetch("http://localhost:4000/makeAdmin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admins)
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
                                       <li>Add Services</li>
                                       <li>{loggedInUser.name}</li>
                                   </ul>
                                   <div className="order-form">
                                       <button onClick={handleAddProduct}>add</button>
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

export default AddService;