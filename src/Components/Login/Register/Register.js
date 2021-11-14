import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import loginBg from '../../../resource/register-bg.svg';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {createUser, isLoading, user, error} = useAuth();
    const history = useHistory();
    const onSubmit = data => {
      if(data.pass !== data.pass1){
          alert("Your password didn't match !");
          return;
      }
      const email = data.email;
      const password = data.pass;
      const name = data.name;;
    createUser(email, password, name, history);
    reset();
  };
    return (
        <div className="regestration-area">
           <div className="register-container">
                <div className="regester-form">
                    <h2>Create Account</h2>
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your name" {...register("name", { required: true, maxLength: 20 })} />
                    <input type="email" placeholder="youe email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
                    <input type="password" placeholder="password" {...register("pass", { pattern: /.{6}/ })} />
                    <input type="password" placeholder="re-type password" {...register("pass1", { pattern: /.{6}/ })} />
                    <input className="order-button" type="submit" value="Register" />
                    </form>}
                    {isLoading && <div style={{textAlign:"center"}}><Spinner animation="border" variant="primary" /></div>}
                    {user.email && ['success'].map((variant, idx) => (<Alert key={idx} variant={variant}>User Created Successfully !</Alert>
                    ))}
                    {error && ['danger'].map((variant, idx) => (<Alert key={idx} variant={variant}>{error}</Alert>
                    ))}
                    <Link className="login-link" to="/login">Already have an account ? Log-In</Link>
                </div>
                <div className="register-img">
                    <img src={loginBg} alt="" />
                </div>
            </div> 
        </div>
    );
};

export default Register;