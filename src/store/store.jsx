// // src/store.js
// import { createStore } from 'redux';
// import rootReducer from './reducers'; // This should match the path to index.js in the reducers folder

// const store = createStore(rootReducer);

// export default store;


// src/store.js

// import { createStore, combineReducers } from 'redux';
// import cartReducer from './reducers/cartReducer';
// import wishlistReducer from './reducers/wishlistReducer'; // assuming you have this

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   wishlist: wishlistReducer
//   // Add other reducers here
// });

// const store = createStore(rootReducer);

// export default store;

// src/store/store.js
// store.js
// store.js
// src/redux/store.js


// import { createStore, combineReducers } from 'redux';
// import wishlistReducer from '../reducers/wishlistReducer';

// const rootReducer = combineReducers({
//   wishlist: wishlistReducer,
//   // other reducers can be added here
// });

// const store = createStore(rootReducer);

// export default store;

import { createStore, combineReducers } from 'redux';
import wishlistReducer from '../reducers/wishlistReducer';
import cartReducer from '../reducers/cartReducer'; // Import the cartReducer

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer, // Add cartReducer here
  // other reducers can be added here
});

const store = createStore(rootReducer);

export default store;




