import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .then(error=>console.log(error));
    }
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn =()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login - LUCKY-Lens</title>
            </Helmet>
            
            <div className="hero-content flex-col lg:flex-row px-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Need full Access???</h1>
                    <p className="py-6 text-3xl">Please Login here!</p>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary mb-5'>Sign in with google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link href="#" clssNme="lbel-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Login' />
                        </div>
                    </form>
                    <p className='font-bold text-center pb-3'>New here? <Link className='text-primary' to='/signup'>Sign Up</Link></p>
                </div>
                <form className='card-body'>
                    
                    </form>
            </div>
        </div>
    );
};

export default Login;