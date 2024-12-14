package com.example.backend.service;

import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginrepository;

    public Login registerUser(Login user) {
        return loginrepository.save(user);
    }

    public Login loginUser(String email, String password) {
        Login user = loginrepository.findByEmail(email);
        System.out.println("User fetched from database: " + user); // Debug log
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public Login getUserByEmail(String email) {
        return loginrepository.findByEmail(email);
    }

   
    
    
}
