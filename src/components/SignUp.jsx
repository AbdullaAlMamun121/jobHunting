import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const path = useNavigate();
    const { createUserByEmailPassword } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        createUserByEmailPassword(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                path('/');
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign Up please!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  isInvalid={errors.email}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span type="invalid">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                   type="password"
                   {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i })}
                   isInvalid={errors.password}
                  className="input input-bordered"
                />
                  {errors.password && (
                        <span type="invalid">Please enter a valid password</span>
                    )}
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Sign Up</button>
                <p>{errorMessage}</p>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-secondary"
                >
                  <FcGoogle></FcGoogle> Sign UP with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;