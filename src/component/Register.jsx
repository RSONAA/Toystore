
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import '../css/Register.css';

// export const Register = () => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('user'); // Added state for role
//     const [errors, setErrors] = useState({ name: '', email: '', pass: '' });
//     const navigate = useNavigate();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };

//     const validateName = (name) => {
//         return name.trim().length > 0;
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
//         let nameError = '';
//         let emailError = '';
//         let passError = '';

//         if (!validateName(name)) {
//             nameError = 'Name is required';
//         }

//         if (!validateEmail(email)) {
//             emailError = 'Please enter a valid email address';
//         }

//         if (!validatePassword(pass)) {
//             passError = 'Password must be at least 6 characters';
//         }

//         if (nameError || emailError || passError) {
//             setErrors({ name: nameError, email: emailError, pass: passError });
//             return;
//         }

//         const user = { name, email, pass, role };

//         try {
//             await axios.post('http://localhost:8080/api/users/register', user); // Replace with your JSON server URL
//             console.log('User registered', user);
//             navigate('/login');
//         } catch (error) {
//             console.error('There was an error registering the user!', error);
//             setErrors({ name: '', email: '', pass: 'An error occurred during registration' });
//         }
//     };

//     return (
//         <div className="register_page">
//             <form className="register" onSubmit={handleRegisterSubmit}>
//                 <h2>Register</h2>
//                 <label htmlFor="name">Name</label>
//                 <div className="input-container">
//                     <i className="fas fa-user"></i>
//                     <input
//                         id="name"
//                         placeholder="Name"
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 {errors.name && <span className="error">{errors.name}</span>}
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
//                 <label htmlFor="role">Role</label>
//                 <div className="input-container">
//                     <select id="role" onChange={(e) => setRole(e.target.value)}>
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="button1">Register</button>
//                 <button type="button" className="button2" onClick={() => navigate('/login')}>Already have an account? Login</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import '../css/Register.css';

// export const Register = () => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('user'); // Added state for role
//     const [errors, setErrors] = useState({ name: '', email: '', pass: '', general: '' });
//     const navigate = useNavigate();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };

//     const validateName = (name) => {
//         return name.trim().length > 0;
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
//         let nameError = '';
//         let emailError = '';
//         let passError = '';

//         if (!validateName(name)) {
//             nameError = 'Name is required';
//         }

//         if (!validateEmail(email)) {
//             emailError = 'Please enter a valid email address';
//         }

//         if (!validatePassword(pass)) {
//             passError = 'Password must be at least 6 characters';
//         }

//         if (nameError || emailError || passError) {
//             setErrors({ name: nameError, email: emailError, pass: passError, general: '' });
//             return;
//         }

//         const user = { name, email, password: pass, role };

//         try {
//             await axios.post('http://localhost:8080/api/users/register', user);
//             console.log('User registered', user);
//             navigate('/login');
//         } catch (error) {
//             console.error('There was an error registering the user!', error);
//             setErrors({ name: '', email: '', pass: '', general: error.response?.data?.message || 'An error occurred during registration' });
//         }
//     };

//     return (
//         <div className="register_page">
//             <form className="register" onSubmit={handleRegisterSubmit}>
//                 <h2>Register</h2>
//                 <label htmlFor="name">Name</label>
//                 <div className="input-container">
//                     <i className="fas fa-user"></i>
//                     <input
//                         id="name"
//                         placeholder="Name"
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 {errors.name && <span className="error">{errors.name}</span>}
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
//                 <label htmlFor="role">Role</label>
//                 <div className="input-container">
//                     <select id="role" onChange={(e) => setRole(e.target.value)}>
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 {errors.general && <span className="error">{errors.general}</span>}
//                 <button type="submit" className="button1">Register</button>
//                 <button type="button" className="button2" onClick={() => navigate('/login')}>Already have an account? Login</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../css/Register.css';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('user'); // Added state for role
    const [errors, setErrors] = useState({ name: '', email: '', pass: '', general: '' });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        let nameError = '';
        let emailError = '';
        let passError = '';

        if (!validateName(name)) {
            nameError = 'Name is required';
        }

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (nameError || emailError || passError) {
            setErrors({ name: nameError, email: emailError, pass: passError, general: '' });
            return;
        }

        const user = { name, email, password: pass, role };

        try {
            await axios.post('http://localhost:8080/api/users/register', user);
            navigate('/login');
        } catch (error) {
            setErrors({ name: '', email: '', pass: '', general: error.response?.data || 'An error occurred during registration' });
        }
    };

    return (
        <div className="register_page">
            <form className="register" onSubmit={handleRegisterSubmit}>
                <h2>Register</h2>
                <label htmlFor="name">Name</label>
                <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input
                        id="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {errors.name && <span className="error">{errors.name}</span>}
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
                <label htmlFor="role">Role</label>
                <div className="input-container">
                    <select id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                {errors.general && <span className="error">{errors.general}</span>}
                <button type="submit" className="button1">Register</button>
                <button type="button" className="button2" onClick={() => navigate('/login')}>Already have an account? Login</button>
            </form>
        </div>
    );
};

export default Register;
