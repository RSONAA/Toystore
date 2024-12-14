// import React, { useContext } from 'react';
// import { useItems } from '../context/ItemContext';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css'; // You can use the same CSS file or create a new one for Shopbychar

// const Shopbychar = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { items } = useItems();  // Get items from context

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   console.log(items.char); 

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys by Character</h1>
//       </div>
//       {items.char && items.char.length > 0 ? (
//         items.char.map((product) => (
//           <div key={product.id} className='zto2'>
//             <h2>{product.brand}</h2>
//             <div className='zto2img'>
//               <div className='zto2sub'>
//                 <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                   <i className="fa-solid fa-heart"></i>
//                 </div>
//                 <img src={product.image} alt={product.name} />
//                 <h5>{product.name}</h5>
//                 <div className='price-cart'>
//                   <h3>Price: ₹{product.price}</h3>
//                   <button
//                     className="shopbutton"
//                     type="button"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Shopbychar;

// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css'; // Use the same CSS file

// const Shopbychar = () => {
//   const { addToCart } = React.useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/items/char');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Fetched data:', data); // Debugging line
//         setItems(data);
//       } catch (error) {
//         console.error('Error fetching items:', error);
//         setError('Error fetching items: ' + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   // Group items by character
//   const groupedItems = items.reduce((acc, item) => {
//     if (!acc[item.characterName]) {
//       acc[item.characterName] = [];
//     }
//     acc[item.characterName].push(item);
//     return acc;
//   }, {});

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys Categorized by Characters</h1>
//       </div>
//       {Object.keys(groupedItems).length > 0 ? (
//         Object.keys(groupedItems).map((character) => (
//           <div key={character} className='category-section'>
//             <h2>{character}</h2>
//             <div className='category-items'>
//               {groupedItems[character].map((product) => (
//                 <div key={product.id} className='product-card'>
//                   <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                     <i className="fa-solid fa-heart"></i>
//                   </div>
//                   <img src={product.image} alt={product.name} />
//                   <h5>{product.name}</h5>
//                   <div className='price-cart'>
//                     <h3>Price: ₹{product.price}</h3>
//                     <button
//                       className="shopbutton"
//                       type="button"
//                       onClick={() => handleAddToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Shopbychar;

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import { addToWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';
import '../css/Shopbyage.css';

const Shopbychar = ({ isAdmin, onEditItem, onDeleteItem }) => {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/items/char');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
        setError('Error fetching items: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      addToCart(item);
    } else {
      navigate('/login');
    }
  };

  const handleAddToWishlist = (item) => {
    if (isAuthenticated) {
      dispatch(addToWishlist(item));
    } else {
      navigate('/login');
    }
  };

  const handleEditItem = (itemId) => {
    navigate(`/admin/edit-item/char/${itemId}`);
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.characterName]) {
      acc[item.characterName] = [];
    }
    acc[item.characterName].push(item);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Toys Categorized by Characters</h1>
      </div>
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((character) => (
          <div key={character} className='category-section'>
            <h2>{character}</h2>
            <div className='category-items'>
              {groupedItems[character].map((product) => (
                <div key={product.id} className='product-card'>
                  <img src={product.image} alt={product.name} />
                  <h5>{product.name}</h5>
                  <div className='price-cart'>
                    <h3>Price: ₹{product.price}</h3>
                    {!isAdmin && (
                      <>
                        <button
                          className="shopbutton"
                          type="button"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                        <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
                          <i className="fa-solid fa-heart"></i>
                        </div>
                      </>
                    )}
                    {isAdmin && (
                      <div className='admin-buttons'>
                        <button onClick={() => handleEditItem(product.id)}>Edit</button>
                        <button onClick={() => onDeleteItem(product.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Shopbychar;
