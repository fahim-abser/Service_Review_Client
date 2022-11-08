import React from 'react';
import img1 from '../../../assets/Previous/1.jpg'
import img2 from '../../../assets/Previous/2.jpg'
import img3 from '../../../assets/Previous/3.jpg'
import img4 from '../../../assets/Previous/4.jpg'

const PreviousWork = () => {
    return (
        <div className="hero my-20">
            <div>
                <h2 className="text-5xl mb-9 font-bold text-center">Previous Work</h2>
                <hr />
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={img1} alt="" className=" border-2 w-4/5 h-full rounded-lg shadow-2xl" />
                        <img src={img2} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className='relative w-1/2'>
                        <img src={img4} alt="" className="w-4/5  h-full rounded-lg shadow-2xl border-8" />
                        <img src={img3} alt="" className="right-5 absolute top-1/2 w-4/5 border-2 rounded-lg shadow-2xl" />
                        {/* <button className="btn btn-primary">Get More Info</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviousWork;






