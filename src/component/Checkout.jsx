import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CartContext from './CartContext';
import "../css/Checkout.css"; 

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Create a navigate function

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    // Ensure price is a number
    const price = typeof item.price === 'number' ? item.price : parseInt(item.price.replace('₹', '').replace(',', ''), 10) || 0;
    return total + price;
  }, 0);

  // Handle proceed to buy
  const handleProceedToBuy = () => {
    navigate('/buy', { state: { cartItems, totalPrice } }); // Redirect with order details
  };

  return (
    <div className='checkout-page'>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map((item, index) => (
              <div className='cart-item' key={index}>
                <img src={item.image} alt={item.name} />
                <div className='item-details'>
                  <h5>{item.name}</h5>
                  <h3>Price: ₹{item.price.toLocaleString()}</h3>
                </div>
                <button className='remove-button' onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className='checkout-summary'>
            <h2>Total Price: ₹{totalPrice.toLocaleString()}</h2>
            <button className='proceed-button' onClick={handleProceedToBuy}>
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;

