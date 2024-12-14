// src/store/reducers.js
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actions';

const initialState = {
  shopbyage: [],
  shopbybrand: [],
  shopbychar: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.category]: [...state[action.payload.category], action.payload.item]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].map(item =>
          item.id === action.payload.item.id ? action.payload.item : item
        )
      };
    case DELETE_ITEM:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default itemsReducer;
