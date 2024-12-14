// import React, { useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from './AuthContext';
// import { addToWishlist } from "../actions/wishlistActions";
// import CartContext from './CartContext';
// import "../css/Outdoor.css";
// const Outdoor = () => {
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector(state => state.wishlist.items);
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       alert("Please log in to add items to the cart.");
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       alert("Please log in to add items to the wishlist.");
//     }
//   };

//   const items = [
//    {
      
//       products: [
//         {
//           id: 1,
//           name: "Toss and Catch Ball",
//           price: 4000,
//           image: "https://m.media-amazon.com/images/I/81P+5qYcgQL._AC_UF894,1000_QL80_.jpg",
//         },
//         {
//           id: 2,
//           name: "Golf Toy",
//           price: 2200,
//           image: "https://image.made-in-china.com/2f0j00fyDcLeiaZmkI/Sports-Toys-Kids-Golf-Toy-Set-Indoor-Playing-Games-Ball-Shooter-Outdoor-Game-Plastic-Sport-for-Children-Throwing.webp",
//         },
//         {
//           id: 3,
//           name: "Elephant Butterfly Catcher Game",
//           price: 3500,
//           image: "https://m.media-amazon.com/images/I/71YYUQQ248L.jpg",
//         },
//         {
//           id: 4,
//           name: "Garden Slide",
//           price: 5100,
//           image: "https://kidzon.co/cdn/shop/products/71b07MYZ2JL._SL1500_-Copy_4d113aa3-9abb-4afc-9cb7-ed74b61f5d1c.jpg?v=1637395544",
//         }
//       ]
//     },
//     {
      
//       products: [
//         {
//           id: 5,
//           name: "Tales of Mountain",
//           price: 1800,
//           image: "https://talesofamountainmama.com/wp-content/uploads/2019/12/Rolling-wheel-1.jpg",
//         },
//         {
//           id: 6,
//           name: "Shooting Air Gun",
//           price: 2200,
//           image: "https://i.ebayimg.com/images/g/q0YAAOSwAUFlY5cv/s-l1200.jpg",
//         },
//         {
//           id: 7,
//           name: "Bow and Arrow",
//           price: 3500,
//           image: "https://s.alicdn.com/@sc04/kf/Hf52edd135ee94c459ca241460c61fbfaB.jpg_720x720q50.jpg",
//         },
//         {
//           id: 8,
//           name: "Basket Ball",
//           price: 5100,
//           image: "https://images.meesho.com/images/products/50203982/erq0h_512.webp",
//         }
//       ]
//     }
//       ];

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Outdoor Games</h1>
//       </div>
//       {wishlistItems.length === 0 && (
//         <div className="empty-wishlist-message">
          
//         </div>
//       )}
//       {items.map((brandItem, index) => (
//         <div key={index} className='zto2'>
//           <h2>{brandItem.brand}</h2>
//           <div className='zto2img'>
//             {brandItem.products.map((product) => (
//               <div className='zto2sub' key={product.id}>
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
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Outdoor;
// import React, { useState, useEffect, useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import CartContext from './CartContext';
// import '../css/Outdoor.css';

// const Outdoor = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/items/outdoor')
//       .then(response => {
//         console.log('Response Status:', response.status); // Log status
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Data received from backend:', data); // Log data
//         setItems(data);
//       })
//       .catch(error => {
//         console.error('Error fetching outdoor items:', error);
//         setError('Error fetching items. Please try again later.');
//       });
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

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!items || items.length === 0) {
//     return <p>No products available</p>;
//   }

//   // Temporarily bypass grouping to display raw items directly
//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Outdoor Games</h1>
//       </div>
//       <div className='category-items'>
//         {items.map((product) => (
//           <div key={product.id} className='product-card'>
//             <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//               <i className="fa-solid fa-heart"></i>
//             </div>
//             <img src={product.image} alt={product.name} />
//             <h5>{product.name}</h5>
//             <div className='price-cart'>
//               <h3>Price: ₹{product.price}</h3>
//               <button
//                 className="shopbutton"
//                 type="button"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Outdoor;

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import { addToWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';
import '../css/Shopbyage.css';

const Outdoor = ({ isAdmin, onEditItem, onDeleteItem }) => {
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
        const response = await fetch('http://localhost:8080/api/items/outdoor');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching outdoor items:', error);
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
    navigate(`/admin/edit-item/outdoor/${itemId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Outdoor Games</h1>
      </div>
      {items.length > 0 ? (
        <div className='category-items'>
          {items.map((product) => (
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
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Outdoor;
