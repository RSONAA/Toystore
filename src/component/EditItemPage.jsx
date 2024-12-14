// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import '../css/EditItemPage.css'; // Add your CSS styling here

// const EditItemPage = () => {
//   const { itemId } = useParams();
//   const [item, setItem] = useState(null);
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/items/${itemId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setItem(data);
//         setImage(data.image);
//         setName(data.name);
//         setPrice(data.price);
//       } catch (error) {
//         console.error('Error fetching item:', error);
//       }
//     };

//     fetchItem();
//   }, [itemId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:8080/api/items/${itemId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           image,
//           name,
//           price,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       navigate('/admin');
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   if (!item) return <p>Loading...</p>;

//   return (
//     <div className="edit-item-page">
//       <h1>Edit Item</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Image URL:</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditItemPage;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/EditItemPage.css';

const EditItemPage = () => {
  const { itemId, category } = useParams(); // Changed from 'section' to 'category'
  const [item, setItem] = useState(null);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log('Fetching item with ID:', itemId, 'in category:', category); // Debugging line
        const response = await axios.get(`http://localhost:8080/api/items/${category}/${itemId}`);
        console.log('Fetched item data:', response.data); // Debugging line
        if (response.status === 200) {
          const data = response.data;
          setItem(data);
          setImage(data.image);
          setName(data.name);
          setPrice(data.price);
        } else {
          console.error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
        setError('Failed to fetch item data');
      }
    };

    fetchItem();
  }, [itemId, category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/items/${category}/${itemId}`, {
        image,
        name,
        price,
        category: item?.category, // Ensure the category is preserved
      });
      if (response.status === 200) {
        navigate('/admin');
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  if (error) return <p>{error}</p>; // Display error if there is one
  if (!item) return <p>Loading...</p>;

  return (
    <div className="edit-item-page">
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditItemPage;
