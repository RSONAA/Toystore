
// const initialState = {
//   items: [],
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_WISHLIST':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;

// src/reducers/wishlistReducer.js
// import { REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

// const initialState = {
//   items: []
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REMOVE_FROM_WISHLIST:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//     // other cases
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;

// src/reducers/wishlistReducer.js
// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

// const initialState = {
//   items: []
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     case REMOVE_FROM_WISHLIST:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//     // other cases
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;

// src/reducers/wishlistReducer.js
// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

// const initialState = {
//   items: []
// };

// const wishlistReducer = (state = initialState, action) => {
//   console.log('wishlistReducer action:', action);
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     case REMOVE_FROM_WISHLIST:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;


// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

// const initialState = {
//   items: [],
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case REMOVE_FROM_WISHLIST:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;

// wishlistReducer.js
// const initialState = {
//   items: []
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_WISHLIST':
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//     case 'REMOVE_FROM_WISHLIST':
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// export default wishlistReducer;

// reducers/wishlistReducer.js
// src/redux/wishlistReducer.js

// const initialState = {
//   items: []
// };

// const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_WISHLIST':
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       };
   
// case 'REMOVE_FROM_WISHLIST':
//   return {
//     ...state,
//     items: state.items.filter(item => item.id !== action.payload)
//   };

//     default:
//       return state;
//   }
// };

// export default wishlistReducer;


import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

const initialState = {
  items: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
