import React from 'react';
import { Helmet } from 'react-helmet';

const AddService = () => {


    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;

        const service = {
            name,
            price,
            details,
            img
        }
        fetch('https://service-review-server-lyart.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <Helmet>
                <title>Add-Service - LUCKY-Lens</title>
            </Helmet>
            <form onSubmit={handleAddReview}>
                <input type="text" name='img' className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='name' className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='price' className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='details' className="input input-bordered input-primary w-full max-w-xs" />
                <button >Add service</button>
            </form>
        </div>
    );
};

export default AddService;