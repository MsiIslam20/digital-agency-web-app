import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer-wrapper" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="f-detail">
                            <h4>Let us handle your project, professionally.</h4>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-form">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="validationDefault03" placeholder="Your email address" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" id="validationDefault02" placeholder="Your name / company’s name" required />
                                </div>     
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="6" required></textarea>
                                </div>                           
                                <button className="btn btn-primary btn-brand mb-5" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 text-center mt-4 pb-2">
                        <p>copyright Orange labs 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;