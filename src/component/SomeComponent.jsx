// src/components/SomeComponent.js
import React from 'react';
import { useItems } from '../context/ItemContext';

const SomeComponent = () => {
  const { updateItem } = useItems();

  const handleAddOrEdit = () => {
    if (typeof updateItem === 'function') {
      updateItem(1, { name: 'Updated Item' });
    } else {
      console.error('updateItem is not a function');
    }
  };

  return (
    <button onClick={handleAddOrEdit}>Add or Edit Item</button>
  );
};

export default SomeComponent;
