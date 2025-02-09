package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}

