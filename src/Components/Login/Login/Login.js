import React from 'react';
import { useForm } from "react-hook-form";
import loginBg from '../../../resource/login-bg.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Menubar from '../../Shared/Menubar/Menubar';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {logInUser, user, error, isLoading, googleSignIn} = useAuth();
    const history  = useHistory();
    const location = useLocation();
    const onSubmit = data => {
        const email = data.email;
        const Password = data.pass;
        logInUser(email, Password, history, location);
        reset();
    };
    const handelGoogleSignIn = () =>{
        googleSignIn( location, history);
    };
    return (
        <div>
            <Menubar />
             <div className="regestration-area">
           <div className="register-container">
                <div className="regester-form">
                    <h2>Log-In Account</h2>
                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="youe email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
                    <input type="password" placeholder="password" {...register("pass", { pattern: /.{6}/ })} />
                    <input className="order-button" type="submit" value="Log-In" />
                    </form>}
                    {isLoading && <div style={{textAlign:"center"}}><CircularProgress /></div>}
                    <Link className="login-link" to="/register">Don't have any account ? Create Account</Link>
                    <div style={{textAlign:"center"}}>
                    <p>-------- OR --------</p>
                    <button className="google-button" onClick={handelGoogleSignIn}><i className="fab fa-google-plus-g"></i> Google Login</button>
                    </div>
                    {user.email && <Alert style={{color:"white"}} severity="success">User Successfully login!</Alert>}
                    {error && <Alert style={{color:"white"}} severity="error">{error}!</Alert>}
                </div>
                <div className="register-img">
                    <img src={loginBg} alt="" />
                </div>
            </div> 
        </div>
        <Footer />
        </div>
    );
};

export default Login;