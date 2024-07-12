import React from 'react'
import "./Login.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Actions/AdminAction';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.admin);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        };
        if(error){
            window.alert(error)
        }
    }, [user, navigate, error]);


    return (
        <div className="login-page">
            <div className="login-container">
                <div className="signin-form">
                    <h2>Admin Login</h2>
                    <form className='fbtn' onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Email</label>
                            <input type="email" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
