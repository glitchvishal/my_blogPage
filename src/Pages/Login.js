import React from 'react'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <from className="loginForm">
                <label>
                    Email
                </label>
                <input type="email" className="registerInput" placeholder="Enter your email "/>
                <label>
                    Password
                </label>
                <input type="password" className="registerInput" placeholder="Enter your password"/>
                <button className="registerBtn">Login</button>
            </from>
            <button className="loginRegisterbtn">Signup</button>
        </div>
    )
}
