// src/store/actions.js

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (category, item) => ({
  type: ADD_ITEM,
  payload: { category, item }
});

export const updateItem = (category, item) => ({
  type: UPDATE_ITEM,
  payload: { category, item }
});

export const deleteItem = (category, id) => ({
  type: DELETE_ITEM,
  payload: { category, id }
});
