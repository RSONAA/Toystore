


package com.example.backend.controller;

import com.example.backend.model.Shopbychar;
import com.example.backend.service.ShopbycharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/items/char")
public class ShopbycharController {

    @Autowired
    private ShopbycharService service;

    @GetMapping
    public ResponseEntity<List<Shopbychar>> getAllItems() {
        List<Shopbychar> items = service.getAllItems();
        return ResponseEntity.ok(items);
    }

    @GetMapping("/characterName/{characterName}")
    public ResponseEntity<List<Shopbychar>> getItemsByCharacterName(@PathVariable String characterName) {
        List<Shopbychar> items = service.getItemsByCharacterName(characterName);
        return ResponseEntity.ok(items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shopbychar> getItemById(@PathVariable Long id) {
        Shopbychar item = service.getItemById(id);
        if (item != null) {
            return ResponseEntity.ok(item);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Shopbychar> addItem(@RequestBody Shopbychar item) {
        System.out.println("Item: " + item);
        Shopbychar savedItem = service.addItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shopbychar> updateItem(@PathVariable Long id, @RequestBody Shopbychar updatedItem) {
        Shopbychar existingItem = service.getItemById(id);
        if (existingItem != null) {
            existingItem.setCharacterName(updatedItem.getCharacterName());
            existingItem.setImage(updatedItem.getImage()); // Ensure that the image URL is updated
            existingItem.setName(updatedItem.getName());
            existingItem.setPrice(updatedItem.getPrice());
            service.updateItem(existingItem);
            return ResponseEntity.ok(existingItem);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        if (service.getItemById(id) != null) {
            service.deleteItem(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
