import React from 'react';
import Contact from '../Contact/Contact';
import Map from '../Map/Map';
import './Footer.css';

const Footer = () => {
    return (
        <div className='contact_container'>
            <div className="text-center contact_text">
                <h4>CONTACT US</h4>
                <h3>Always Connect with us </h3>
            </div>


            <div className='d-flex justify-content-center'>
                <div className=" w-75 row">
                    <div className="col-md-6">
                        <Contact></Contact>
                    </div>
                    
                    <div className="col-md-6">
                        <Map></Map>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <h6 className="text-center text-muted">Copyright {(new Date()).getFullYear()} © All rights reserved  by Creative Agency</h6>
            </div>
        </div>
    );
};

export default Footer;

