import React, { useState } from 'react';
import "./SignUp.css";

function Login({ onSubmit, credentials }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleEvent = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            alert("Please enter a valid email and password");
            return;
        }

        if (credentials && credentials.email === loginData.email && credentials.password === loginData.password) {
            onSubmit(credentials);
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="wrapper">
            <div className="flip-card__back">
                <div className="title">Log in</div>
                <form onSubmit={handleSubmit} className="flip-card__form">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="flip-card__input"
                        value={loginData.email}
                        onChange={handleEvent}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="flip-card__input"
                        value={loginData.password}
                        onChange={handleEvent}
                    />
                    <button type="submit" className="flip-card__btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
