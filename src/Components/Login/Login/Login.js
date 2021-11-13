import React from 'react';
import { useForm } from "react-hook-form";
import loginBg from '../../../resource/login-bg.svg';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)};
    return (
        <div>
             <div className="regestration-area">
           <div className="register-container">
                <div className="regester-form">
                    <h2>Log-In Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="youe email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
                    <input type="password" placeholder="password" {...register("pass", { pattern: /.{6}/ })} />
                    <input className="order-button" type="submit" value="Log-In" />
                    </form>
                    <Link className="login-link" to="/register">Don't have any account ? Create Account</Link>
                </div>
                <div className="register-img">
                    <img src={loginBg} alt="" />
                </div>
            </div> 
        </div>
        </div>
    );
};

export default Login;