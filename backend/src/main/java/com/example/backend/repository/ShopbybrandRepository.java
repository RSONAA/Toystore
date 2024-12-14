package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Shopbybrand;

import java.util.List;

@Repository
public interface ShopbybrandRepository extends JpaRepository<Shopbybrand, Long> {
    List<Shopbybrand> findByBrand(String brand);
}
