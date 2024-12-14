package com.example.backend.repository;

import com.example.backend.model.Login;

import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByEmail(String email);
}
   