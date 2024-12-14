// import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css';

// const Shopbyage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   const items = {
//     '0-2 Years': [
//       { id: 1, image: 'https://images-cdn.ubuy.co.in/6437ffa14073cb64e44d51d3-montessori-pull-string-toys-for-babies.jpg', name: 'Montessori Toy', price: '₹1800' },
//       { id: 2, image: 'https://quasarworld.in/wp-content/uploads/2021/06/41nAOBwaLGL.jpg', name: 'Wooden Number Train', price: '₹2200' },
//       { id: 3, image: 'https://m.media-amazon.com/images/I/51lbyZ4stGL.jpg', name: 'ABC Pyramid', price: '₹3500' },
//       { id: 4, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/crib-toy-play-gym/3/h/k/6-baby-play-gym-mat-and-play-piano-for-kids-0-2-years-lights-original-imah2heza5hcwguy.jpeg?q=20&crop=false', name: 'Piano Baby Gym', price: '₹5100' }
//     ],
//     '3-8 Years': [
//       { id: 5, image: 'https://images-cdn.ubuy.ae/655950d01f86fd7a13704114-games-for-4-5-6-7-year-olds-boys-girls.jpg', name: 'Tetra Tower', price: '₹2500' },
//       { id: 6, image: 'https://m.media-amazon.com/images/I/61mNsbu-zsL.jpg', name: 'Art and Craft Kit', price: '₹5000' },
//       { id: 7, image: 'https://samstoy.in/cdn/shop/files/Buy-Childrens-Electric-Motorcycle-Tricycle-Can-Sit-In-Baby-Toy-bike-Battery-1-3-5-6-12-Years-Old-Trikes-Ride-on-Toys-in-Ahmedabad-samstoy-in-near-me-in-Ahmedaba-4969_1445x.jpg?v=1705215305', name: 'Harley Electric Bike', price: '₹7500' },
//       { id: 8, image: 'https://m.media-amazon.com/images/I/61CBvC7qbzL._AC_UF1000,1000_QL80_.jpg', name: 'Kizmos 250 Pieces', price: '₹900' }
//     ],
//     '9-15 Years': [
//       { id: 9, image: 'https://m.media-amazon.com/images/I/81G6eCvtGBL.jpg', name: 'Junior Engineer', price: '₹3000' },
//       { id: 10, image: 'https://nationaltoday.com/wp-content/uploads/2022/10/Laser-Tag-Guns-with-Vests-Set-of-4-500x390.png', name: 'Armo Recharge Guns', price: '₹1100' },
//       { id: 11, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvKjs5jaoRKRNtDrPDUeqh0wzlneBQGu9Ag&usqp=CAU', name: 'DIY Guitar', price: '₹1000' },
//       { id: 12, image: 'https://jaimantoys.com/wp-content/uploads/2023/05/1-6.jpg', name: 'Math Kit', price: '₹1200' }
//     ]  
//   };

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys Categorized by Age</h1>
//       </div>
//       {Object.entries(items).map(([ageRange, productList]) => (
//         <div key={ageRange} className='zto2'>
//           <h2>{ageRange}</h2>
//           <div className='zto2img'>
//             {productList.map(product => (
//               <div className='zto2sub' key={product.id}>
//                 <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                   <i className="fa-solid fa-heart"></i>
//                 </div>
//                 <img src={product.image} alt={product.name} />
//                 <h5>{product.name}</h5>
//                 <div className='price-cart'>
//                   <h3>Price: ₹{product.price}</h3>
//                   <button
//                     className="shopbutton"
//                     type="button"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shopbyage;


// import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css';

// const Shopbyage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   const items = {
//     '0-2 Years': [
//       { id: 1, image: 'https://images-cdn.ubuy.co.in/6437ffa14073cb64e44d51d3-montessori-pull-string-toys-for-babies.jpg', name: 'Montessori Toy', price: 1800 },
//       { id: 2, image: 'https://quasarworld.in/wp-content/uploads/2021/06/41nAOBwaLGL.jpg', name: 'Wooden Number Train', price: 2200 },
//       { id: 3, image: 'https://m.media-amazon.com/images/I/51lbyZ4stGL.jpg', name: 'ABC Pyramid', price: 3500 },
//       { id: 4, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/crib-toy-play-gym/3/h/k/6-baby-play-gym-mat-and-play-piano-for-kids-0-2-years-lights-original-imah2heza5hcwguy.jpeg?q=20&crop=false', name: 'Piano Baby Gym', price: 5100 }
//     ],
//     '3-8 Years': [
//       { id: 5, image: 'https://images-cdn.ubuy.ae/655950d01f86fd7a13704114-games-for-4-5-6-7-year-olds-boys-girls.jpg', name: 'Tetra Tower', price: 2500},
//       { id: 6, image: 'https://m.media-amazon.com/images/I/61mNsbu-zsL.jpg', name: 'Art and Craft Kit', price: 5000},
//       { id: 7, image: 'https://samstoy.in/cdn/shop/files/Buy-Childrens-Electric-Motorcycle-Tricycle-Can-Sit-In-Baby-Toy-bike-Battery-1-3-5-6-12-Years-Old-Trikes-Ride-on-Toys-in-Ahmedabad-samstoy-in-near-me-in-Ahmedaba-4969_1445x.jpg?v=1705215305', name: 'Harley Electric Bike', price: 7500 },
//       { id: 8, image: 'https://m.media-amazon.com/images/I/61CBvC7qbzL._AC_UF1000,1000_QL80_.jpg', name: 'Kizmos 250 Pieces', price: 900 }
//     ],
//     '9-15 Years': [
//       { id: 9, image: 'https://m.media-amazon.com/images/I/81G6eCvtGBL.jpg', name: 'Junior Engineer', price: 3000 },
//       { id: 10, image: 'https://nationaltoday.com/wp-content/uploads/2022/10/Laser-Tag-Guns-with-Vests-Set-of-4-500x390.png', name: 'Armo Recharge Guns', price: 1100 },
//       { id: 11, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvKjs5jaoRKRNtDrPDUeqh0wzlneBQGu9Ag&usqp=CAU', name: 'DIY Guitar', price: 1000 },
//       { id: 12, image: 'https://jaimantoys.com/wp-content/uploads/2023/05/1-6.jpg', name: 'Math Kit', price: 1200 }
//     ]  
//   };

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys Categorized by Age</h1>
//       </div>
//       {Object.entries(items).map(([ageRange, productList]) => (
//         <div key={ageRange} className='zto2'>
//           <h2>{ageRange}</h2>
//           <div className='zto2img'>
//             {productList.map(product => (
//               <div className='zto2sub' key={product.id}>
//                 <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                   <i className="fa-solid fa-heart"></i>
//                 </div>
//                 <img src={product.image} alt={product.name} />
//                 <h5>{product.name}</h5>
//                 <div className='price-cart'>
//                   <h3>Price: ₹{product.price}</h3>
//                   <button
//                     className="shopbutton"
//                     type="button"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shopbyage;

// import React, { useContext } from 'react';
// import { useItems } from '../context/ItemContext';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css';

// const Shopbyage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { items } = useItems();  // Get items from context

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   // Group items by category
//   const groupedItems = items.age.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys Categorized by Age</h1>
//       </div>
//       {Object.keys(groupedItems).length > 0 ? (
//         Object.keys(groupedItems).map((category) => (
//           <div key={category} className='category-section'>
//             <h2>{category}</h2>
//             <div className='category-items'>
//               {groupedItems[category].map((product) => (
//                 <div key={product.id} className='product-card'>
//                   <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                     <i className="fa-solid fa-heart"></i>
//                   </div>
//                   <img src={product.image} alt={product.name} />
//                   <h5>{product.name}</h5>
//                   <div className='price-cart'>
//                     <h3>Price: ₹{product.price}</h3>
//                     <button
//                       className="shopbutton"
//                       type="button"
//                       onClick={() => handleAddToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Shopbyage;

// import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CartContext from './CartContext';
// import { addToWishlist } from '../actions/wishlistActions';
// import { useAuth } from './AuthContext';
// import '../css/Shopbyage.css';

// const Shopbyage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/items/allages');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setItems(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleAddToCart = (item) => {
//     if (isAuthenticated) {
//       addToCart(item);
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddToWishlist = (item) => {
//     if (isAuthenticated) {
//       dispatch(addToWishlist(item));
//     } else {
//       navigate('/login');
//     }
//   };

//   const addItem = async (item) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/items/age', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(item),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   const updateItem = async (id, item) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/items/age/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(item),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching items: {error}</p>;

//   const groupedItems = items.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className='outpage'>
//       <div className='shoptext'>
//         <h1>Toys Categorized by Age</h1>
//       </div>
//       {Object.keys(groupedItems).length > 0 ? (
//         Object.keys(groupedItems).map((category) => (
//           <div key={category} className='category-section'>
//             <h2>{category}</h2>
//             <div className='category-items'>
//               {groupedItems[category].map((product) => (
//                 <div key={product.id} className='product-card'>
//                   <div className='wishlist-icon' onClick={() => handleAddToWishlist(product)}>
//                     <i className="fa-solid fa-heart"></i>
//                   </div>
//                   <img src={product.image} alt={product.name} />
//                   <h5>{product.name}</h5>
//                   <div className='price-cart'>
//                     <h3>Price: ₹{product.price}</h3>
//                     <button
//                       className="shopbutton"
//                       type="button"
//                       onClick={() => handleAddToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Shopbyage;

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import { addToWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';
import '../css/Shopbyage.css';
import axios from 'axios'; // Import Axios

const Shopbyage = ({ isAdmin, onEditItem, onDeleteItem }) => {
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
        const response = await fetch('http://localhost:8080/api/items/allages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
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
    navigate(`/admin/edit-item/age/${itemId}`);
  };
  

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/api/items/age/${itemId}`);
      setItems(items.filter(item => item.id !== itemId)); // Update the state to remove the deleted item
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Error deleting item');
    }
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching items: {error}</p>;

  return (
    <div className='outpage'>
      <div className='shoptext'>
        <h1>Toys Categorized by Age</h1>
      </div>
      {Object.keys(groupedItems).length > 0 ? (
        Object.keys(groupedItems).map((category) => (
          <div key={category} className='category-section'>
            <h2>{category}</h2>
            <div className='category-items'>
              {groupedItems[category].map((product) => (
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
                        <button onClick={() => handleDeleteItem(product.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default Shopbyage;
