// ItemContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState(null);

    const fetchItems = async () => {
        // Fetch items from an API or database
        const data = await fetch('your-api-endpoint').then(res => res.json());
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <ItemContext.Provider value={{ items, fetchItems }}>
            {children}
        </ItemContext.Provider>
    );
};
