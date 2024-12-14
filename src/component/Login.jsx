

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "../css/Login.css";
// import { useAuth } from "./AuthContext";

// export const Login = () => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [errors, setErrors] = useState({ email: '', pass: '', general: '' });
//     const [success, setSuccess] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };

//     const handleClick = () => {
//         navigate('/register');
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         let emailError = '';
//         let passError = '';

//         if (!validateEmail(email)) {
//             emailError = 'Please enter a valid email address';
//         }

//         if (!validatePassword(pass)) {
//             passError = 'Password must be at least 6 characters';
//         }

//         if (emailError || passError) {
//             setErrors({ email: emailError, pass: passError, general: '' });
//             setSuccess('');
//             return;
//         }

//         try {
//             const result = await axios.post('http://localhost:8080/api/users/login', {
//                 email: email,
//                 password: pass
//             });

//             if (result.status === 200) {
//                 setSuccess('Successfully logged in!');
//                 setErrors({ email: '', pass: '', general: '' });

//                 login(result.data.role); // Assuming the backend will return a role
//                 if (result.data.role === 'admin') {
//                     navigate('/admin');
//                 } else {
//                     navigate('/home');
//                 }
//             } else {
//                 setSuccess('');
//                 setErrors({ email: '', pass: 'Invalid email or password', general: '' });
//             }
//         } catch (error) {
//             setErrors({ email: '', pass: '', general: error.response?.data || 'An error occurred during login' });
//             setSuccess('');
//         }
//     };

//     return (
//         <div className="login_page">
//             <form className="login" onSubmit={handleLoginSubmit}>
//                 <h2>Login</h2>
//                 <label htmlFor="email">Email</label>
//                 <div className="input-container">
//                     <i className="fas fa-envelope"></i>
//                     <input
//                         id="email"
//                         placeholder="Enter your Email Address"
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 <label htmlFor="pass">Password</label>
//                 <div className="input-container">
//                     <i className="fas fa-lock"></i>
//                     <input
//                         type="password"
//                         id="pass"
//                         placeholder="Enter your Password"
//                         onChange={(e) => setPass(e.target.value)}
//                     />
//                 </div>
//                 {errors.pass && <span className="error">{errors.pass}</span>}
//                 {errors.general && <span className="error">{errors.general}</span>}
//                 {success && <span className="success">{success}</span>}
//                 <button className="button1" type="submit">Login</button>
//                 <button className="button2" type="button" onClick={handleClick}>Don't have an account? Register</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../css/Login.css";
import { useAuth } from "./AuthContext";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ email: '', pass: '', general: '' });
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleClick = () => {
        navigate('/register');
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let emailError = '';
        let passError = '';

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (emailError || passError) {
            setErrors({ email: emailError, pass: passError, general: '' });
            setSuccess('');
            return;
        }

        try {
            const result = await axios.post('http://localhost:8080/api/users/login', {
                email: email,
                password: pass
            });

            if (result.status === 200) {
                // Store the user's email in localStorage
                localStorage.setItem('userEmail', email);
                
                setSuccess('Successfully logged in!');
                setErrors({ email: '', pass: '', general: '' });

                login(result.data.role); // Assuming the backend will return a role
                if (result.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/home');
                }
            } else {
                setSuccess('');
                setErrors({ email: '', pass: 'Invalid email or password', general: '' });
            }
        } catch (error) {
            setErrors({ email: '', pass: '', general: error.response?.data || 'An error occurred during login' });
            setSuccess('');
        }
    };

    return (
        <div className="login_page">
            <form className="login" onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input
                        id="email"
                        placeholder="Enter your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <span className="error">{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter your Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                {errors.pass && <span className="error">{errors.pass}</span>}
                {errors.general && <span className="error">{errors.general}</span>}
                {success && <span className="success">{success}</span>}
                <button className="button1" type="submit">Login</button>
                <button className="button2" type="button" onClick={handleClick}>Don't have an account? Register</button>
            </form>
        </div>
    );
};

export default Login;
