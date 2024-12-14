// import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';
// import wishlistReducer from './wishlistReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   wishlist: wishlistReducer,

// });

// export default rootReducer;

// reducers/index.js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


