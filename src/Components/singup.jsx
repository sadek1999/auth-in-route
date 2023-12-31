import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProvider';

const Singup = () => {
    const { creatUser}=useContext(authContext)
//    console.log(authinfo)

   
    const handlesingup=e=>{
      e.preventDefault()
      const email=e.target.email.value;
      const password =e.target.password.value;
    //   console.log(email ,password)
    creatUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>
        {
            console.log(error)
        })

    }




    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Sing Up now!</h1>
                
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handlesingup}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="your name" name='name' required className="input input-bordered" />
                    </div>
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
                        <input type="submit" value="sing up" className='btn btn-secondary' />
                    </div>
                    </form>
                    <p>new ? <Link to={'/login'}>log in</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Singup;