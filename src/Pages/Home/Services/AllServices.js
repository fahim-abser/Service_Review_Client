import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-5'>
            <Helmet>
                <title>All Services - LUCKY-Lens</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center m-10'>All Services</h2>
            <div className='grid gap-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;