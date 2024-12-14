// // Buy.js
// import React from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation
// import "../css/Buy.css"; 
// const Buy = () => {
//   const location = useLocation();
//   const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

//   // Debugging: Log location state
//   console.log(location.state);

//   return (
//     <div className='buy-page'>
//       <h1>Order Details</h1>
//       <div className='order-summary'>
//         {cartItems.length === 0 ? (
//           <p>No items in the cart</p>
//         ) : (
//           <div>
//             <h2>Items:</h2>
//             <ul>
//               {cartItems.map((item, index) => (
//                 <li key={index}>
//                   <img src={item.image} alt={item.name} width={50} height={50} />
//                   <span>{item.name}</span>
//                   <span>₹{item.price.toLocaleString()}</span>
//                 </li>
//               ))}
//             </ul>
//             <h2>Total Price: ₹{totalPrice.toLocaleString()}</h2>
//           </div>
//         )}
//       </div>
//       <div className='payment-info'>
//         <h2>Payment Information</h2>
//         {/* Add your payment information form or instructions here */}
//         <p>Proceed with payment...</p>
//       </div>
//     </div>
//   );
// };

// export default Buy;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/Buy.css";

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };
  
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    netBankingProfileId: '',
    netBankingPassword: ''
  });
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);

  const handleShippingDetailsChange = (event) => {
    const { name, value } = event.target;
    setShippingDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentDetailsChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
    // Add logic to apply promo code and update discountedPrice
  };

  const handleProceedToPayment = (event) => {
    event.preventDefault();
    // Simulate successful payment
    setPaymentSuccessful(true);
  };

  const handleViewOrderDetails = () => {
    navigate('/order-details', { state: { orderDetails: { 
      paymentMethod, 
      discountedPrice, 
      shippingDetails, 
      items: cartItems 
    } } });
  };
  

  return (
    <div className='buy-page'>
      <h1>Order Details</h1>

      {step === 1 && (
        <div className='order-summary'>
          <h2>Items:</h2>
          {cartItems.length === 0 ? (
            <p className='no-items'>No items in the cart</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
          <h2 className='total-price'>Total Price: ₹{totalPrice.toLocaleString()}</h2>
          <button onClick={() => setStep(2)}>Proceed to Shipping Details</button>
        </div>
      )}

      {step === 2 && !paymentSuccessful && (
        <div className='shipping-details'>
          <h2>Shipping Details</h2>
          <div className='shipping-form'>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleShippingDetailsChange}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingDetailsChange}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingDetailsChange}
                required
              />
            </label>
            <label>
              Postal Code:
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleShippingDetailsChange}
                required
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={shippingDetails.country}
                onChange={handleShippingDetailsChange}
                required
              />
            </label>
          </div>
          <button onClick={() => setStep(3)}>Proceed to Payment</button>
        </div>
      )}

      {step === 3 && !paymentSuccessful && (
        <div className='payment-method-selection'>
          <h2>Select Payment Method</h2>
          <form className='payment-form' onSubmit={handleProceedToPayment}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={handlePaymentMethodChange}
              />
              UPI (e.g., Google Pay, PhonePe, Paytm)
            </label>
            {paymentMethod === 'upi' && (
              <label>
                UPI ID:
                <input
                  type="text"
                  name="upiId"
                  value={paymentDetails.upiId}
                  onChange={handlePaymentDetailsChange}
                  required
                />
              </label>
            )}
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
              />
              Credit/Debit Card
            </label>
            {paymentMethod === 'creditCard' && (
              <>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  Expiry Date (MM/YY):
                  <input
                    type="text"
                    name="cardExpiry"
                    value={paymentDetails.cardExpiry}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cardCvv"
                    value={paymentDetails.cardCvv}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
              </>
            )}
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="netBanking"
                checked={paymentMethod === 'netBanking'}
                onChange={handlePaymentMethodChange}
              />
              Net Banking
            </label>
            {paymentMethod === 'netBanking' && (
              <>
                <label>
                  Profile ID:
                  <input
                    type="text"
                    name="netBankingProfileId"
                    value={paymentDetails.netBankingProfileId}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="netBankingPassword"
                    value={paymentDetails.netBankingPassword}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
              </>
            )}

            <div className="promo-code-section">
              <h3>Gift Card or Promo Code</h3>
              <label>
                Promo Code:
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  placeholder="Enter promo code"
                />
              </label>
              <p>Discounted Price: ₹{discountedPrice.toFixed(2)}</p>
            </div>

            <h3>Total Price: ₹{discountedPrice.toFixed(2)}</h3>
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      )}

      {paymentSuccessful && (
        <div className='payment-success'>
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase.</p>
          <button onClick={handleViewOrderDetails}>View Order Details</button>
        </div>
      )}
    </div>
  );
};

export default Buy;
