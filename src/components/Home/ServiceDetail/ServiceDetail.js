import React from 'react';

const ServiceDetail = ({ allServices }) => {
    return (
       <section className='col-md-4 text-center services_box '>
            <div className="services_detail">
                <div className="layer"></div>

                <div className="d-flex justify-content-center ">
                    {
                        allServices.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${allServices.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${allServices.img}`} alt="" />
                    }
                </div>
                
                <h3>{allServices.project}</h3>
                <p>{allServices.service}</p>
            </div>
        </section>
    );
};

export default ServiceDetail;