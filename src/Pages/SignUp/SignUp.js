import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { authContext } from '../../contexts/AuthProvider';

const SignUp = () => {
// const {register, updateUserProfile} = useContext(authContext)
//     const HandleClick = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const photoUrl = form.photoUrl.value;
//         const email = form.email.value;
//         const password = form.password.value;

//         register(email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user)
//             form.reset();
//             HandleUser(name,photoUrl)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
//     const HandleUser = (name, photoUrl) => {
//         const profile = {
//             displayName: name,
//             photoURL: photoUrl
//         }
//         updateUserProfile(profile)
//             .then(() => { })
//             .catch(error => console.log(error))
//     }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row px-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Don't have account?</h1>
                    <p className="py-6 text-3xl">Please SignUp here!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='passwrod' required className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Sign Up' />
                        </div>
                    </form>
                    <p className='font-bold text-center pb-3'>Already have an account? <Link className='text-primary' to='/login'>Log in</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;