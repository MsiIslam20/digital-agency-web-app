import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AddService.css'

const AddService = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://desolate-falls-67613.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("service added successfully...!!!!!")
        })
        .catch(error => {
            console.error(error)
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
                                        <div className="row">
                                            <div className="col-md-7">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Service Title</label>
                                                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="icon">Upload a image</label>
                                                                <input onChange={handleFileChange} type="file" className="form-control" id="icon" placeholder="Picture" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Description</label>
                                                        <textarea onBlur={handleBlur} type="text" rows="5" className="form-control" name="description" placeholder="Description" />
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

export default AddService;