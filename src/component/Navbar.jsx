

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../Image/Red blue illustration Kids Toys logo (2) (1).png";
import "../css/Navbar.css";

const Navbar = ({ isAdmin }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className='full'>
      <div className='nav'>
        <div className='logo'>
          <img src={logo} alt="Toy Store Logo" />
        </div>
        <div className="heading">
          <span className="color1"></span>
          <span className="color2"></span>
          <span className="color3"></span>
          <span className="color4"> </span>
          <span className="color5">T</span>
          <span className="color6">in</span>
          <span className="color7">y</span>
          <span className="color8"> </span>
          <span className="color9">T</span>
          <span className="color10">re</span>
          <span className="color11">as</span>
          <span className="color12">ur</span>
          <span className="color13">es</span>
        </div>
        <div className='icons'>
          <form className="search" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search.." 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="loginbutton">
            <i className="fa-solid fa-user" onClick={() => navigate('/login')}></i>
          </div>
          <div className="profilebutton">
            <i className="fa-solid fa-user-circle" onClick={() => navigate('/profilepage')}></i>
          </div>
          {!isAdmin && (
            <>
              <div className="cart">
                <i className="fa-solid fa-cart-shopping" onClick={() => navigate('/checkout')}></i>
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
              </div>
              <div className='wish'>
                <i className="fa-solid fa-heart" onClick={() => navigate('/wishlist')}></i>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="shops">
        <button className="shopy" type="button" onClick={() => navigate('/home')}><h2>Home</h2></button>
        <button className="shopy" type="button" onClick={() => navigate('/about')}><h2>About</h2></button>
        <button className="shopy" type="button" onClick={() => navigate('/shopbyage')}><h2>Shop by Age</h2></button>
        <button className="shopy" type="button" onClick={() => navigate('/shopbychar')}><h2>Shop by Characters</h2></button>
        <button className="shopy" type="button" onClick={() => navigate('/shopbybrand')}><h2>Shop by Brand</h2></button>
        <button className="shopy" type="button" onClick={() => navigate('/contact')}><h2>Contact us</h2></button>
      </div>
    </div>
  );
};

export default Navbar;
