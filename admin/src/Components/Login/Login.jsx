import React from 'react'
import "./Login.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../Actions/AdminAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Layouts/Loader';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword))

    }

    useEffect(() => {
        if (error) {
            window.alert(error)
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo);
        }
    }, [dispatch, error, navigate, isAuthenticated, location.state])



    return (
        <>
            {loading && <Loader />}
            <div className="login-page">
                <div className="login-container">
                    <div className="signin-form">
                        <h2>Admin Login</h2>
                        <form className='fbtn' onSubmit={loginSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" id="username" name="username" value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)} required />
                            </div>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
