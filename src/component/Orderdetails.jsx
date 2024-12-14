import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/OrderDetails.css'; // Adjust the path to your CSS file if necessary

const Orderdetails = () => {
  const { state } = useLocation();
  const { orderDetails } = state || {};  // Default to empty object if state is undefined
  console.log('Order Details:', orderDetails);

  const [arrivalDate, setArrivalDate] = useState('');

  useEffect(() => {
    const calculateArrivalDate = () => {
      const currentDate = new Date();
      const arrival = new Date(currentDate);
      arrival.setDate(currentDate.getDate() + 7); // Assuming 7 days for delivery
      return arrival.toDateString();
    };

    setArrivalDate(calculateArrivalDate());
  }, []);

  if (!orderDetails) {
    return <p>No order details available.</p>;
  }

  return (
    <div className='order-details-page'>
      <h1>Order Summary</h1>
      <div className='order-summary'>
        <h2>Payment Method</h2>
        <p>{orderDetails.paymentMethod}</p>
        
        <h2>Total Price</h2>
        <p>₹{orderDetails.discountedPrice.toFixed(2)}</p>
        
        <h2>Shipping Details</h2>
        <p>Name: {orderDetails.shippingDetails.name}</p>
        <p>Address: {orderDetails.shippingDetails.address}</p>
        <p>City: {orderDetails.shippingDetails.city}</p>
        <p>Postal Code: {orderDetails.shippingDetails.postalCode}</p>
        <p>Country: {orderDetails.shippingDetails.country}</p>
        <p>Expected Arrival Date: {arrivalDate}</p>

        <h2>Ordered Items</h2>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width={50} height={50} />
              <span>{item.name}</span>
              <span>₹{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orderdetails;
