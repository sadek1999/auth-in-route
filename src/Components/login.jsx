import React from 'react';
import { Link } from 'react-router-dom';
  const handlelogin=e=>{
    e.preventDefault()
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password =e.target.password.value;
    console.log(email ,password,name)
  }
const Login = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlelogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"
                                
                                >Password</span>
                            </label>
                            <input type="password" name='password' required  placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="log in" className='btn btn-secondary' />
                        </div>
                        </form>
                        <p>new ? <Link to={'/singup'}>Sing up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;