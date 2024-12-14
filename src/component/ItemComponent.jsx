import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CartContext from './CartContext';
import { addToWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';

const ItemComponent = ({ item, deleteItem }) => {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      addToCart(item);
    } else {
      navigate('/login');
    }
  };

  const handleAddToWishlist = () => {
    if (isAuthenticated) {
      dispatch(addToWishlist(item));
    } else {
      navigate('/login');
    }
  };

  const handleEdit = () => {
    navigate(`/admin/edit-item/${item.id}`);
  };

  return (
    <div className='product-card'>
      <div className='wishlist-icon' onClick={handleAddToWishlist}>
        <i className="fa-solid fa-heart"></i>
      </div>
      <img src={item.image} alt={item.name} />
      <h5>{item.name}</h5>
      <div className='price-cart'>
        <h3>Price: ₹{item.price}</h3>
        <button
          className="shopbutton"
          type="button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      <div className="admin-controls">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ItemComponent;
