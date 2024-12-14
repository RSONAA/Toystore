

package com.example.backend.repository;

import com.example.backend.model.Shopbyage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopbyageRepository extends JpaRepository<Shopbyage, Long> {
    List<Shopbyage> findByCategory(String category);
}
