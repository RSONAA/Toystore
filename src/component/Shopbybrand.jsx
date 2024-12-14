
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import { addToWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';
import '../css/Shopbyage.css';

const Shopbybrand = ({ isAdmin, onEditItem, onDeleteItem }) => {
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
        const response = await fetch('http://localhost:8080/api/items/brand?brand=all');
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
    navigate(`/admin/edit-item/brand/${itemId}`);
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Toys Categorized by Brand</h1>
      </div>
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((brand) => (
          <div key={brand} className='category-section'>
            <h2>{brand}</h2>
            <div className='category-items'>
              {groupedItems[brand].map((product) => (
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

export default Shopbybrand;
