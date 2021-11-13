import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import loginBg from '../../../resource/register-bg.svg';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data)};
    return (
        <div className="regestration-area">
           <div className="register-container">
                <div className="regester-form">
                    <h2>Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your name" {...register("name", { required: true, maxLength: 20 })} />
                    <input type="email" placeholder="youe email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
                    <input type="password" placeholder="password" {...register("pass", { pattern: /.{6}/ })} />
                    <input className="order-button" type="submit" value="Register" />
                    </form>
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