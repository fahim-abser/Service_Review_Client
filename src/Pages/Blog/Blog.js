import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <p className='text-xl text-white'>Question 1:Difference between SQL and NoSQL</p>
            <p className='mb-3'>Ans: SQL is the programming language used to interface with relational databases. . NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            <p className='text-xl text-white'>Question 2:What is JWT, and how does it work?</p>
            <p className='mb-3'>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. <br />
                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            <p className='text-xl text-white'>Question 3:What is the difference between javascript and NodeJS?</p>
            <p className='mb-3 '>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            <p className='text-xl text-white'>Question 4:How does NodeJS handle multiple requests at the same time?</p>
            <p className='mb-3'>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;