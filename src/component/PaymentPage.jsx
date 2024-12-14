// PaymentPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import necessary hooks
import '../css/PaymentPage.css'; 

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing and order submission here
    console.log('Payment Info:', paymentInfo);
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', totalPrice);

    // Simulate successful payment and redirect to confirmation page
    navigate('/order-confirmation', { state: { cartItems, totalPrice } });
  };

  return (
    <div className='payment-page'>
      <h1>Payment Details</h1>
      <div className='order-summary'>
        <h2>Order Summary</h2>
        <div className='cart-items'>
          {cartItems.map((item, index) => (
            <div className='cart-item' key={index}>
              <img src={item.image} alt={item.name} />
              <div className='item-details'>
                <h5>{item.name}</h5>
                <h3>Price: ₹{item.price.toLocaleString()}</h3>
              </div>
            </div>
          ))}
        </div>
        <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
      </div>
      <form className='payment-form' onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type='text'
            name='cardNumber'
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            placeholder='1234 5678 9123 4567'
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type='text'
            name='cardExpiry'
            value={paymentInfo.cardExpiry}
            onChange={handleInputChange}
            placeholder='MM/YY'
            required
          />
        </label>
        <label>
          CVV:
          <input
            type='text'
            name='cardCVV'
            value={paymentInfo.cardCVV}
            onChange={handleInputChange}
            placeholder='123'
            required
          />
        </label>
        <button type='submit' className='submit-button'>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
