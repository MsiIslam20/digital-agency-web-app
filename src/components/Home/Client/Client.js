import React from 'react';
import google from '../../../images/google.png';
import slack from '../../../images/slack.png';
import uber from '../../../images/uber.png';
import netflix from '../../../images/netflix.png';
import arbnb from '../../../images/airbnb.png';
import './Client.css'

const Client = () => {
    return (
        <div className="client-area section-padding">
           <div className="container">
               <div className="row">
                   <div className="col-md-12 text-center">
                       <img src={google} alt="" className="img-fluid"/>
                       <img src={slack} alt="" className="img-fluid"/>
                       <img src={uber} alt="" className="img-fluid"/>
                       <img src={netflix} alt="" className="img-fluid"/>
                       <img src={arbnb} alt="" className="img-fluid"/>
                   </div>
               </div>
            </div> 
        </div>
    );
};

export default Client;