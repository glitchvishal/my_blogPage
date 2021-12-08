import React from 'react'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Signup</span>
            <from className="registerForm">
            <label>
                    Full Name
                </label>
                <input type="text" className="registerInput" placeholder="Enter your name "/>
                <label>
                    Email
                </label>
                <input type="email" className="registerInput" placeholder="Enter your email "/>
                <label>
                    Password
                </label>
                <input type="password" className="registerInput" placeholder="Enter your password"/>
                <button className="registerBtn">Signup</button>
            </from>
            <button className="registerLoginbtn">login</button>
        </div>
    )
}
