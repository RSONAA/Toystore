// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../css/AddItemPage.css";

// const AddItemPage = () => {
//   const [section, setSection] = useState('age'); // Default section
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newItem = { image, name, price };
//       console.log("New Item: ", newItem); // Log the item data to check
//       const response = await axios.post(`http://localhost:8080/api/items/${section}`, newItem); // Use backticks for the template literal
//       if (response.status === 200) {
//           navigate('/admin');
//       } else {
//           console.error(`HTTP error! Status: ${response.status}`); // Correctly format the error logging message
//       }
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   const handleSectionChange = (e) => {
//     setSection(e.target.value);
//   };

//   return (
//     <div className="add-item-page">
//       <h1>Add New Item</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Select Section:</label>
//           <select value={section} onChange={handleSectionChange} className="form-control">
//             <option value="age">Age</option>
//             <option value="brand">Brand</option>
//             <option value="char">Character</option>
//             <option value="outdoor">Outdoor</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Item</button>
//       </form>
//     </div>
//   );
// };

// export default AddItemPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/AddItemPage.css";

const AddItemPage = () => {
  const [section, setSection] = useState('age'); // Default section
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { image, name, price };
      console.log("New Item: ", newItem); // Log the item data to check
      const response = await axios.post(`http://localhost:8080/api/items/${section}`, newItem);
      if (response.status === 201) { // Check for successful creation
        navigate('/admin'); // Navigate back to admin page where items are fetched
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  return (
    <div className="add-item-page">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Section:</label>
          <select value={section} onChange={handleSectionChange} className="form-control">
            <option value="age">Age</option>
            <option value="brand">Brand</option>
            <option value="char">Character</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
