// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
// import other reducers if any

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  // other reducers
});

export default rootReducer;
