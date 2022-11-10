import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Details = () => {
    const detail = useLoaderData();
    // console.log(detail);
    const { img, name, price, details, _id } = detail;
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [review, setReview] = useState([]);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const review = {
            message,
            serviceName: name,
            // userEmail: user.email,
            serviceId: _id
        }



        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id, review])
    return (
        <div>
            <div className="card lg:card-side bg-base-300 shadow-2xl p-10">
                <figure><img className='card-img' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{name}</h2>
                    <h3 className='text-4xl'>Price: {price}</h3>
                    <p>{details}</p>

                </div>
            </div>
            <div className="hero mt-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <h3 className='text-4xl m-5'>Previous Review:</h3>
                            {
                                review.map(r => <h4 className='pl-5 text-2xl'>{r.message}</h4>)
                            }

                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleReview}>
                                <textarea name='message' required className="textarea textarea-info m-5" placeholder="Leave a comment..."></textarea>

                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;