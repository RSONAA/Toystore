// // ProductCard.js
// import React, { useContext } from 'react';
// import CartContext from './CartContext';
// import "../css/ProductCard.css";

// const ProductCard = ({ image, name, price, item }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(item);
//   };

//   return (
//     <div className='zto2sub'>
//       <div className='wishlist-icon'>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//       <img src={image} alt="not found" />
//       <h5>{name}</h5>
//       <div className='price-cart'>
//         <h3>Price: {price}</h3>
//         <button className="shopbutton" type="button" onClick={handleAddToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ProductCard.js
// import React, { useContext } from 'react';
// import CartContext from './CartContext';
// import "../css/ProductCard.css";
// import { useAuth } from "./AuthContext"; // Import useAuth
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ image, name, price, item }) => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth(); // Get isAuthenticated from useAuth
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login'); // Redirect to login if not authenticated
//     }
//   };

//   return (
//     <div className='zto2sub'>
//       <div className='wishlist-icon'>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//       <img src={image} alt="not found" />
//       <h5>{name}</h5>
//       <div className='price-cart'>
//         <h3>Price: {price}</h3>
//         <button className="shopbutton" type="button" onClick={handleAddToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React, { useContext } from 'react';
// import CartContext from './CartContext';
// import "../css/ProductCard.css";
// import { useAuth } from "./AuthContext";
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ image, name, price, item }) => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <div className='zto2sub'>
//       <div className='wishlist-icon'>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//       <img src={image} alt="not found" />
//       <h5>{name}</h5>
//       <div className='price-cart'>
//         <h3>Price: {price}</h3>
//         <button className="shopbutton" type="button" onClick={handleAddToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React, { useContext } from 'react';
// import CartContext from './CartContext';
// import "../css/ProductCard.css";
// import { useAuth } from "./AuthContext";
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ image, name, price, item }) => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <div className='zto2sub'>
//       <div className='wishlist-icon'>
//         <i className="fa-solid fa-heart"></i>
//       </div>
//       <img src={image} alt="not found" />
//       <h5>{name}</h5>
//       <div className='price-cart'>
//         <h3>Price: {price}</h3>
//         <button className="shopbutton" type="button" onClick={handleAddToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// src/component/ProductCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../actions/wishlistActions';
import '../css/ProductCard.css'; // Create a CSS file for ProductCard styling if you haven't already

const ProductCard = ({ image, name, price, item }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(item));
  };

  return (
    <div className='product-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className='wishlist-button' onClick={handleAddToWishlist}>
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
