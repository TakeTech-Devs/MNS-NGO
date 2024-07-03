import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div className="login-page">
            <div className="container">
                <div className="signin-form">
                    <h2>Admin Login</h2>
                    <form className='fbtn'>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
