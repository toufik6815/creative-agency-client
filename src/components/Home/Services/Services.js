import React, { useEffect, useState } from "react";
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);
    
    useEffect(() => {
      fetch("https://evening-escarpment-47993.herokuapp.com//services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
        <section className="services_container">
            <div className="text-center">
                <h2>Provide awesome <span>Services</span></h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(allServices => <ServiceDetail allServices={allServices} key={allServices._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
