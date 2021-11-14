import React from 'react';
import { useForm } from "react-hook-form";
import loginBg from '../../../resource/login-bg.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {logInUser, user, error, isLoading} = useAuth();
    const history  = useHistory();
    const location = useLocation();
    const onSubmit = data => {
        const email = data.email;
        const Password = data.pass;
        console.log(email, Password);
        logInUser(email, Password, history, location);
        reset();
    };
    return (
        <div>
             <div className="regestration-area">
           <div className="register-container">
                <div className="regester-form">
                    <h2>Log-In Account</h2>
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="youe email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
                    <input type="password" placeholder="password" {...register("pass", { pattern: /.{6}/ })} />
                    <input className="order-button" type="submit" value="Log-In" />
                    </form>}
                    {isLoading && <div style={{textAlign:"center"}}><Spinner animation="border" variant="primary" /></div>}
                    {user.email && ['success'].map((variant, idx) => (<Alert key={idx} variant={variant}>User Created Successfully !</Alert>
                    ))}
                    {error && ['danger'].map((variant, idx) => (<Alert key={idx} variant={variant}>{error}</Alert>
                    ))}
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