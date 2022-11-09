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
            <div>
                <form onSubmit={handleReview}>
                    <textarea name='message' className="textarea textarea-info" placeholder="Bio"></textarea>
                    <button className='btn-primary'>Review Submit</button>
                </form>
                {
                    review.map(r => <p>From p-tag{r.message}</p>)
                }

            </div>
        </div>
    );
};

export default Details;