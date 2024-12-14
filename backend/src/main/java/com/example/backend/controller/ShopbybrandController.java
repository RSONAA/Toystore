package com.example.backend.controller;

// import com.example.backend.model.Shopbybrand;
// import com.example.backend.service.ShopbybrandService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.Collections;
// import java.util.List;

// @RestController
// @RequestMapping("/api/items")
// public class ShopbybrandController {
//     @Autowired
//     private ShopbybrandService shopbybrandService;

//     @GetMapping("/brand")
//     public ResponseEntity<List<Shopbybrand>> getItemsByBrand(@RequestParam String brand) {
//         List<Shopbybrand> items = shopbybrandService.getItemsByBrand(brand);
//         return ResponseEntity.ok(items != null ? items : Collections.emptyList());
//     }

//     @PostMapping("/brand")
//     public ResponseEntity<Shopbybrand> addItem(@RequestBody Shopbybrand item) {
//         Shopbybrand savedItem = shopbybrandService.addItem(item);
//         return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
//     }

//     @GetMapping("/all")
//     public ResponseEntity<List<Shopbybrand>> getAllItems() {
//         List<Shopbybrand> items = shopbybrandService.getAllItems();
//         return ResponseEntity.ok(items);
//     }

//     @PutMapping("/brand/{id}")
//     public ResponseEntity<Shopbybrand> updateItem(@PathVariable Long id, @RequestBody Shopbybrand item) {
//         Shopbybrand updatedItem = shopbybrandService.updateItem(id, item);
//         if (updatedItem != null) {
//             return ResponseEntity.ok(updatedItem);
//         } else {
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//         }
//     }

//     @DeleteMapping("/brand/{id}")
//     public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
//         if (shopbybrandService.deleteItem(id)) {
//             return ResponseEntity.noContent().build();
//         } else {
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//         }
//     }
// }

import com.example.backend.model.Shopbybrand;
import com.example.backend.service.ShopbybrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/items")
public class ShopbybrandController {

    @Autowired
    private ShopbybrandService shopbybrandService;

    @GetMapping("/brand")
    public ResponseEntity<List<Shopbybrand>> getItemsByBrand(@RequestParam String brand) {
        List<Shopbybrand> items = shopbybrandService.getItemsByBrand(brand);
        return ResponseEntity.ok(items);
    }

    @PostMapping("/brand")
    public ResponseEntity<Shopbybrand> addItem(@RequestBody Shopbybrand item) {
        System.out.println("Item: " + item);
        Shopbybrand savedItem = shopbybrandService.addItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    @GetMapping("/all")
public ResponseEntity<List<Shopbybrand>> getAllItems() {
    List<Shopbybrand> items = shopbybrandService.getAllItems();
    return ResponseEntity.ok(items);
}


    @GetMapping("/brand/{id}")
    public ResponseEntity<Shopbybrand> getItemById(@PathVariable Long id) {
        Shopbybrand item = shopbybrandService.getItemById(id);
        if (item != null) {
            return ResponseEntity.ok(item);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/brand/{id}")
    public ResponseEntity<Shopbybrand> updateItem(@PathVariable Long id, @RequestBody Shopbybrand item) {
        Shopbybrand updatedItem = shopbybrandService.updateItem(id, item);
        if (updatedItem != null) {
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/brand/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        if (shopbybrandService.deleteItem(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
    
   
    
}


