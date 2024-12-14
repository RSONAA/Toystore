package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public Optional<Item> getItem(Long id) {
        return itemRepository.findById(id);
    }

    public Item updateItem(Long id, Item item) {
        if (itemRepository.existsById(id)) {
            item.setId(id); // Ensure the ID is set for the update
            return itemRepository.save(item);
        } else {
            return null;
        }
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
}

