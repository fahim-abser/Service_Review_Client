import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {

    const { img, name, price, details} = service;
    // console.log(service);
    return (
        <div className="card lg:card-side bg-base-300 shadow-2xl p-10">
            <figure><img className='card-img' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl">{name}</h2>
                <h3 className='text-4xl'>Price: {price}</h3>
                <p>{details.slice(0, 99)}...</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;