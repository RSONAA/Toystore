package com.example.backend.service;

import com.example.backend.model.Shopbychar;
import com.example.backend.repository.ShopbycharRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopbycharService {

    @Autowired
    private ShopbycharRepository repository;

    public List<Shopbychar> getAllItems() {
        return repository.findAll();
    }

    public List<Shopbychar> getItemsByCharacterName(String characterName) {
        return repository.findByCharacterName(characterName);
    }

    public Shopbychar getItemById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Shopbychar addItem(Shopbychar item) {
        return repository.save(item);
    }

    public Shopbychar updateItem(Shopbychar item) {
        return repository.save(item);
    }
    
    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}
