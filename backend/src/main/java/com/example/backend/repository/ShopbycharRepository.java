package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Shopbychar;

import java.util.List;

public interface ShopbycharRepository extends JpaRepository<Shopbychar, Long> {
    List<Shopbychar> findByCharacterName(String characterName);
}
