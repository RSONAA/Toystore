package com.example.backend.repository;

import com.example.backend.model.Outdoor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OutdoorRepository extends JpaRepository<Outdoor, Long> {
}
