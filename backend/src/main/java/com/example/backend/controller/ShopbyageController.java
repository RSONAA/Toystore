package com.example.backend.controller;

import com.example.backend.model.Shopbyage;
import com.example.backend.service.ShopbyageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/items")
public class ShopbyageController {

    @Autowired
    private ShopbyageService shopbyageService;

    @PostMapping(value = "/age", 
                 consumes = MediaType.APPLICATION_JSON_VALUE, 
                 produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Shopbyage> addItem(@RequestBody Shopbyage item) {
        System.out.println("Item: " + item);
        Shopbyage savedItem = shopbyageService.addItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    @GetMapping("/age")
    public ResponseEntity<List<Shopbyage>> getItemsByCategory(@RequestParam String category) {
        List<Shopbyage> items = shopbyageService.getItemsByCategory(category);
        return ResponseEntity.ok(items);
    }
    

    @GetMapping("/allages")
    public ResponseEntity<List<Shopbyage>> getAllItems() {
        List<Shopbyage> items = shopbyageService.getAllItems();
        return ResponseEntity.ok(items);
    }

    @GetMapping("/age/{id}")
    public ResponseEntity<Shopbyage> getItemById(@PathVariable Long id) {
        Shopbyage item = shopbyageService.getItemById(id);
        if (item != null) {
            return ResponseEntity.ok(item);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(value = "/age/{id}", 
            consumes = MediaType.APPLICATION_JSON_VALUE, 
            produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<Shopbyage> updateItem(@PathVariable Long id, @RequestBody Shopbyage item) {
    item.setId(id);
    Shopbyage updatedItem = shopbyageService.updateItem(item);
    if (updatedItem != null) {
        return ResponseEntity.ok(updatedItem);
    } else {
        return ResponseEntity.notFound().build();
    }
}

@DeleteMapping("/age/{id}")
public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
    boolean isDeleted = shopbyageService.deleteItem(id);
    if (isDeleted) {
        return ResponseEntity.noContent().build(); // No content to return, successful deletion
    } else {
        return ResponseEntity.notFound().build(); // Item not found
    }
}


    
    

}
