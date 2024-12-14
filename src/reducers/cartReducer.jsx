// import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

// const initialState = {
//   items: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;

// src/reducers/cartReducer.js

// const initialState = {
//   items: []
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     // Add other cases for cart actions here
//     default:
//       return state;
//   }
// };

// export default cartReducer;

// const initialState = {
//   items: []
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     // Handle other action types if needed
//     default:
//       return state;
//   }
// };

// export default cartReducer;


// reducers/cartReducer.js
// import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

// const initialState = {
//   items: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Adding item to cart:', action.payload); // Debugging
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
