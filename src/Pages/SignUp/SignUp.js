

//         .catch(err => console.error(err))
// //     }
// //     const HandleUser = (name, photoUrl) => {
// //         const profile = {
// //             displayName: name,
// //             photoURL: photoUrl
// //         }
// //         updateUserProfile(profile)
// //             .then(() => { })
// //             .catch(error => console.log(error))
//     }
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row px-20">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Don't have account?</h1>
//                     <p className="py-6 text-3xl">Please SignUp here!</p>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form  className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text" placeholder="name" name='name' required className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" placeholder="email" name='email' required className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="text" placeholder="password" name='passwrod' required className="input input-bordered" />

//                         </div>
//                         <div className="form-control mt-6">
//                             <input className='btn btn-primary' type="submit" value='Sign Up' />
//                         </div>
//                     </form>
//                     <p className='font-bold text-center pb-3'>Already have an account? <Link className='text-primary' to='/login'>Log in</Link></p>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
            <Helmet>
                <title>Sign up - LUCKY-Lens</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Don't have account?</h1>
                     <p className="py-6 text-3xl">Please SignUp here!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='font-bold text-center'>Already have an account? <Link className='font-bold' to="/login">Log in</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;