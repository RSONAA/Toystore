package com.example.backend.service;

import com.example.backend.model.Shopbybrand;
import com.example.backend.repository.ShopbybrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShopbybrandService {

    @Autowired
    private ShopbybrandRepository shopbybrandRepository;

    // Get items by brand name
    public List<Shopbybrand> getItemsByBrand(String brand) {
        if ("all".equalsIgnoreCase(brand)) {
            return shopbybrandRepository.findAll();
        } else {
            return shopbybrandRepository.findByBrand(brand);
        }
    }

    // Add a new item
    public Shopbybrand addItem(Shopbybrand item) {
        return shopbybrandRepository.save(item);
    }

    // Get all items
    public List<Shopbybrand> getAllItems() {
        return shopbybrandRepository.findAll();
    }

    // Get an item by its ID
    public Shopbybrand getItemById(Long id) {
        Optional<Shopbybrand> item = shopbybrandRepository.findById(id);
        return item.orElse(null);  // Return null if the item is not found
    }

    // Update an item
    public Shopbybrand updateItem(Long id, Shopbybrand item) {
        if (shopbybrandRepository.existsById(id)) {
            item.setId(id);  // Ensure the ID is set to update the existing item
            return shopbybrandRepository.save(item);
        }
        return null;  // Return null if the item is not found
    }

    // Delete an item
    public boolean deleteItem(Long id) {
        if (shopbybrandRepository.existsById(id)) {
            shopbybrandRepository.deleteById(id);
            return true;
        }
        return false;  // Return false if the item is not found
    }
}
