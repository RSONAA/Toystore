// package com.example.backend.service;

// import com.example.backend.model.Shopbyage;
// import com.example.backend.repository.ShopbyageRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ShopbyageService {
//     @Autowired
//     private ShopbyageRepository itemRepository;

//     public Shopbyage addItem(Shopbyage item) {
//         return itemRepository.save(item);
//     }

//     public List<Shopbyage> getItemsByCategory(String category) {
//         return itemRepository.findByCategory(category);
//     }

//     public List<Shopbyage> getAllItems() {
//         return itemRepository.findAll();
//     }

//     public Shopbyage updateItem(Shopbyage item) {
//         if (itemRepository.existsById(item.getId())) {
//             return itemRepository.save(item);
//         } else {
//             throw new RuntimeException("Item not found with id " + item.getId());
//         }
//     }

//     public void deleteItem(Long id) {
//         if (itemRepository.existsById(id)) {
//             itemRepository.deleteById(id);
//         } else {
//             throw new RuntimeException("Item not found with id " + id);
//         }
//     }
// }

// package com.example.backend.service;

// import com.example.backend.model.Shopbyage;
// import com.example.backend.repository.ShopbyageRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class ShopbyageService {

//     @Autowired
//     private ShopbyageRepository shopbyageRepository;

//     public Shopbyage addItem(Shopbyage item) {
//         return shopbyageRepository.save(item);
//     }

//     public List<Shopbyage> getItemsByCategory(String category) {
//         return shopbyageRepository.findByCategory(category);
//     }

//     public List<Shopbyage> getAllItems() {
//         return shopbyageRepository.findAll();
//     }

//     public Shopbyage updateItem(Shopbyage item) {
//         return shopbyageRepository.save(item);
//     }

//     public void deleteItem(Long id) {
//         shopbyageRepository.deleteById(id);
//     }
// }

package com.example.backend.service;

import com.example.backend.model.Shopbyage;
import com.example.backend.repository.ShopbyageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopbyageService {

    @Autowired
    private ShopbyageRepository shopbyageRepository;

    public Shopbyage addItem(Shopbyage item) {
        return shopbyageRepository.save(item);
    }

    public List<Shopbyage> getItemsByCategory(String category) {
        return shopbyageRepository.findByCategory(category);
    }

    public List<Shopbyage> getAllItems() {
        return shopbyageRepository.findAll();
    }

    public Shopbyage updateItem(Shopbyage item) {
        return shopbyageRepository.save(item);
    }

    public Shopbyage getItemById(Long id) {
        return shopbyageRepository.findById(id).orElse(null);
    }

    public boolean deleteItem(Long id) {
        if (shopbyageRepository.existsById(id)) {
            shopbyageRepository.deleteById(id);
            return true; // Successfully deleted
        }
        return false; // Item not found
    }
    
}
