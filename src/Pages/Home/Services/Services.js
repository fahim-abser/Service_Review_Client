import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center m-10'>Services</h2>
            <hr className='pb-5'/>
            <div className='grid gap-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-10'>
            <Link to={`/allservices`} className="btn text-center btn-primary">More Services...</Link>
            </div>
        </div>
    );
};

export default Services;