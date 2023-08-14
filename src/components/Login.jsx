import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { signIn,createUserWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const from = location.state?.from?.pathname || '/';
    
    const onSubmit = data => {
        // console.log(data);
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                navigate(from,{replace:true});
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err.message);
            });
    };

    const handleLoginByGoogle=()=>{
        createUserWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from,{replace:true});
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage(err.message)
        })
    }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login please!</h1>
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
                <button className="btn btn-primary" type="submit">Login</button>
                <p>{errorMessage}</p>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-secondary"
                  onClick={handleLoginByGoogle}
                >
                  <FcGoogle></FcGoogle> Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
