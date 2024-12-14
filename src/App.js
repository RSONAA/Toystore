

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
// import './App.css';
// import Login from './component/Login';
// import Register from './component/Register';
// import Home from './component/Home';
// import About from './component/About';
// import Contact from "./component/Contact";
// import Navbar from "./component/Navbar";
// import Shopbyage from "./component/Shopbyage";
// import Shopbybrand from "./component/Shopbybrand";
// import Shopbychar from "./component/Shopbychar";
// // import Checkout from "./component/Checkout";
// import Wishlist from "./component/Wishlist";
// import Buy from "./component/Buy";
// import SearchResults from "./component/SearchResults";
// import Outdoor from "./component/Outdoor";
// import AdminHomePage from "./component/AdminHomePage";
// import { CartProvider } from "./component/CartContext";
// import { AuthProvider, useAuth } from "./component/AuthContext";
// import store from "./store/store";
// import { Provider } from 'react-redux';
// import PaymentPage from "./component/PaymentPage";
// import Checkout from "./component/Checkout";
// import Orderdetails from "./component/Orderdetails";
// import ProfilePage from "./component/ProfilePage";
// import EditItemPage from "./component/EditItemPage";
// import AddItemPage from "./component/AddItemPage";

// const App = () => {
//   const [currentForm, setCurrentForm] = useState('Login');
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   };

//   const location = useLocation();
//   const hideNavbarPaths = ["/login", "/register"];
//   const { isAuthenticated } = useAuth();

//   return (
//     <div className="App">
//       {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
//       <Routes>
//         <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
//         <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/" element={<Navigate replace to="/home" />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/shopbyage" element={<Shopbyage />} />
//         <Route path="/shopbybrand" element={<Shopbybrand />} />
//         <Route path="/shopbychar" element={<Shopbychar />} />
//         <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
//         <Route path="/wishlist" element={isAuthenticated ? <Wishlist /> : <Navigate to="/login" />} />
//         <Route path="/buy" element={isAuthenticated ? <Buy /> : <Navigate to="/login" />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/outdoor" element={<Outdoor />} />
//         <Route path="/admin" element={<AdminHomePage />} />
//         <Route path="/edit/:category/:id" element={<EditItemPage />} />
//         <Route path="/payment" element={<PaymentPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/order-details" element={<Orderdetails />} />
//         <Route path="/profilepage" element={<ProfilePage />} />
//         {/* <Route path="/admin/edit-item/:itemId" element={<EditItemPage />} /> */}
//         <Route path="/admin/edit-item/:category/:itemId" element={<EditItemPage />} />

//         <Route path="/admin/add-item" element={<AddItemPage />} />
        

//       </Routes>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <Provider store={store}>
//       <AuthProvider>
//         <CartProvider>
//           <App />
//         </CartProvider>
//       </AuthProvider>
//     </Provider>
//   </Router>
// );

// export default AppWrapper;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import About from './component/About';
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Shopbyage from "./component/Shopbyage";
import Shopbybrand from "./component/Shopbybrand";
import Shopbychar from "./component/Shopbychar";
import Wishlist from "./component/Wishlist";
import Buy from "./component/Buy";
import SearchResults from "./component/SearchResults";
import Outdoor from "./component/Outdoor";
import AdminHomePage from "./component/AdminHomePage";
import { CartProvider } from "./component/CartContext";
import { AuthProvider, useAuth } from "./component/AuthContext";
import store from "./store/store";
import { Provider } from 'react-redux';
import PaymentPage from "./component/PaymentPage";
import Checkout from "./component/Checkout";
import Orderdetails from "./component/Orderdetails";
import ProfilePage from "./component/ProfilePage";
import EditItemPage from "./component/EditItemPage";
import AddItemPage from "./component/AddItemPage";
import FeedbackPage from './component/FeedbackPage';

const App = () => {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register"];
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar isAdmin={location.pathname.includes('/admin')} />}
      <Routes>
        <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopbyage" element={<Shopbyage />} />
        <Route path="/shopbybrand" element={<Shopbybrand />} />
        <Route path="/shopbychar" element={<Shopbychar />} />
        <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
        <Route path="/wishlist" element={isAuthenticated ? <Wishlist /> : <Navigate to="/login" />} />
        <Route path="/buy" element={isAuthenticated ? <Buy /> : <Navigate to="/login" />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/edit/:category/:id" element={<EditItemPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-details" element={<Orderdetails />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/admin/edit-item/:category/:itemId" element={<EditItemPage />} />
        <Route path="/admin/add-item" element={<AddItemPage />} />
        <Route path="/admin/feedback" element={<FeedbackPage />} />
        
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Provider>
  </Router>
);

export default AppWrapper;
