package com.example.backend.service;

import com.example.backend.model.Outdoor;
import com.example.backend.repository.OutdoorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OutdoorService {
    @Autowired
    private OutdoorRepository repository;

    public List<Outdoor> getAllItems() {
        return repository.findAll();
    }

    public Optional<Outdoor> getItemById(Long id) {
        return repository.findById(id);
    }

    public Outdoor addItem(Outdoor item) {
        return repository.save(item);
    }

    public Outdoor updateItem(Long id, Outdoor item) {
        if (repository.existsById(id)) {
            item.setId(id);
            return repository.save(item);
        }
        return null;
    }

    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}
