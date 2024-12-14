// // src/actions/wishlistActions.js
// export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

// export const addToWishlist = (item) => ({
//   type: ADD_TO_WISHLIST,
//   payload: item,
// });
// src/actions/wishlistActions.js
// export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

// export const removeFromWishlist = (itemId) => ({
//   type: REMOVE_FROM_WISHLIST,
//   payload: itemId
// });

// src/actions/wishlistActions.js




// export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
// export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

// // Action to add an item to the wishlist
// export const addToWishlist = (item) => ({
//   type: ADD_TO_WISHLIST,
//   payload: item
// });

// // Action to remove an item from the wishlist
// export const removeFromWishlist = (itemId) => ({
//   type: REMOVE_FROM_WISHLIST,
//   payload: itemId
// });

// src/actions/wishlistActions.js
// export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
// export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

// // Action to add an item to the wishlist
// export const addToWishlist = (item) => ({
//   type: ADD_TO_WISHLIST,
//   payload: item
// });

// // Action to remove an item from the wishlist
// export const removeFromWishlist = (itemId) => ({
//   type: REMOVE_FROM_WISHLIST,
//   payload: itemId
// });

// Actions for Wishlist
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item
});
export const removeFromWishlist = (itemId) => ({
  type: 'REMOVE_FROM_WISHLIST',
  payload: itemId
});

