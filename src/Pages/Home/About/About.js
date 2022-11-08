import React from 'react';
import photographer from '../../../assets/photographer.jpg';
import './About.css'

const About = () => {
    return (
        <div className="hero my-20">
            <div>
                <h2 className="text-5xl mb-9 font-bold text-center">About Me</h2>
                <hr />
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={photographer} alt="" className=" border-2 w-full h-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='relative w-1/2'>
                        <p className="text-5xl mb-5 right-5 top-3/5  border-2  rounded-lg info-content" >"CAPTURE WHAT HASN'T BEEN CAPTURED BEFORE"</p>
                        <p>LUCK Lens, photographer from Dhaka, Bangladesh. In work, use tools of documentary reportage, portraiture, fashion photography, art photography and filmmaking. Unexpected moments, rollercoaster emotions, and beautiful souls crazy in love make our hearts beat faster. With my work,  following couples worldwide, capturing these vibrant memories youll carry with you for years to come. I'm not good in talking about myselves - and after all, it's about you and your story.  Leave  a message and let's get this party started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;