import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {

    const { img, name, price, details } = service;
    return (
        <div className="card lg:card-side bg-base-300 shadow-2xl p-10">
            <figure><img className='card-img' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3>Price:{price}</h3>
                <p>{details.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;