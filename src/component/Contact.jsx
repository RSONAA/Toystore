// import React, { useState } from 'react';
// import "../css/Contact.css";
// import logo from "../Image/toys (1).png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));

//     // Clear validation error for the field
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ''
//     }));

//     // Clear success message on input change
//     setSuccessMessage('');
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.message) {
//       newErrors.message = 'Message is required';
//     }

//     setErrors(newErrors);
//     console.log('Validation Errors:', newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form data submitted:', formData);
//       setSuccessMessage('Your message has been sent successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   return (
//     <div className="contact_page">
//       <div className='twoinone'>
//         <div className="helptext">
//           <h2>We Are <br />here to Help You</h2>
//         </div>
//         <div className='helpimg'>
//           <img src={logo} alt="Toy Store Logo" /> 
//         </div>
//       </div>
      
//       <form className="contactus" onSubmit={handleSubmit}>
//         <h2 style={{color: "#D2042D"}}>Contact Us</h2>
//         <label htmlFor="name">Name</label>
//         <div className='name'>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
        
//         <label htmlFor="email">Email</label>
//         <div className='email'>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
        
//         <label htmlFor="message">Message</label>
//         <div className='mes'>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           {errors.message && <p className="error">{errors.message}</p>}
//         </div>
        
//         <div className="button-container">
//           <button className="button1" type="submit">Send Message</button>
//         </div>
//       </form>
      
//       {successMessage && <p className="success">{successMessage}</p>}
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import "../css/Contact.css";
// import logo from "../Image/toys (1).png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));

//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ''
//     }));

//     setSuccessMessage('');
//     setErrorMessage('');
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.message) {
//       newErrors.message = 'Message is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const serviceID = 'your_service_id'; // Replace with your EmailJS service ID
//       const templateID = 'your_template_id'; // Replace with your EmailJS template ID
//       const userID = 'your_user_id'; // Replace with your EmailJS user ID

//       const emailParams = {
//         to_name: 'Thetoystore005@gmail.com', // Recipient email
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message
//       };

//       emailjs.send(serviceID, templateID, emailParams, userID)
//         .then((result) => {
//           console.log('Email sent:', result.text);
//           setSuccessMessage('Your message has been sent successfully!');
//           setFormData({
//             name: '',
//             email: '',
//             message: ''
//           });
//         })
//         .catch((error) => {
//           console.error('Email sending error:', error.text);
//           setErrorMessage('There was an error sending your message. Please try again later.');
//         });
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   return (
//     <div className="contact_page">
//       <div className='twoinone'>
//         <div className="helptext">
//           <h2>We Are <br />here to Help You</h2>
//         </div>
//         <div className='helpimg'>
//           <img src={logo} alt="Toy Store Logo" /> 
//         </div>
//       </div>
      
//       <form className="contactus" onSubmit={handleSubmit}>
//         <h2 style={{color: "#D2042D"}}>Contact Us</h2>
//         <label htmlFor="name">Name</label>
//         <div className='name'>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
        
//         <label htmlFor="email">Email</label>
//         <div className='email'>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
        
//         <label htmlFor="message">Message</label>
//         <div className='mes'>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           {errors.message && <p className="error">{errors.message}</p>}
//         </div>
        
//         <div className="button-container">
//           <button className="button1" type="submit">Send Message</button>
//         </div>
//       </form>
      
//       {successMessage && <p className="success">{successMessage}</p>}
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import axios from 'axios';
import "../css/Contact.css";
import logo from "../Image/toys (1).png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));

    setSuccessMessage('');
    setErrorMessage('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/contact/submit', formData);
        console.log('Contact form submitted:', response.data);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting contact form:', error);
        setErrorMessage('There was an error sending your message. Please try again later.');
      }
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="contact_page">
      <div className='twoinone'>
        <div className="helptext">
          <h2>We Are <br />here to Help You</h2>
        </div>
        <div className='helpimg'>
          <img src={logo} alt="Toy Store Logo" /> 
        </div>
      </div>
      
      <form className="contactus" onSubmit={handleSubmit}>
        <h2 style={{color: "#D2042D"}}>Contact Us</h2>
        <label htmlFor="name">Name</label>
        <div className='name'>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        
        <label htmlFor="email">Email</label>
        <div className='email'>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        
        <label htmlFor="message">Message</label>
        <div className='mes'>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        
        <div className="button-container">
          <button className="button1" type="submit">Send Message</button>
        </div>
      </form>
      
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
