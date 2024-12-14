

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../actions/wishlistActions';
import CartContext from './CartContext';
import { addToCart } from '../actions/cartActions';
import { useAuth } from './AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Wishlist.css';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const { isAuthenticated } = useAuth(); // Use the authentication context
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  const handleRemove = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

 
  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      addToCart(item);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='wishlist-page'>
      <div className='wishlist-header'>
        <h1>Wishlist</h1>
      </div>
      {wishlistItems.length > 0 ? (
        <div className='wishlist-items'>
          {wishlistItems.map(item => (
            <div key={item.id} className='wishlist-item'>
              <img src={item.image} alt={item.name} />
              <div className='item-details'>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className='item-actions'>
                  <button 
                    className='remove-button' 
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button 
                    className='add-to-cart-button' 
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='wishlist-empty'>
          <h3>Wishlist is Empty</h3>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
