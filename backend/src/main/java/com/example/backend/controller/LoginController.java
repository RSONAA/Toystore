// package com.example.backend.controller;

// import com.example.backend.model.Login;
// import com.example.backend.service.LoginService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000") // Update this to match your frontend URL
// @RequestMapping("/api/users")
// public class LoginController {

//     @Autowired
//     private LoginService loginservice;

//     @PostMapping("/register")
//     public ResponseEntity<?> register(@RequestBody Login login) {
//         try {
//             Login registeredUser = loginservice.registerUser(login);
//             return ResponseEntity.ok(registeredUser);
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
//         }
//     }

//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody Login user) {
//         try {
//             System.out.println("Login request received: " + user); // Debug log
//             Login authenticatedUser = loginservice.loginUser(user.getEmail(), user.getPassword());
//             if (authenticatedUser != null) {
//                 return ResponseEntity.ok(authenticatedUser); // Return user details
//             } else {
//                 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//             }
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed: " + e.getMessage());
//         }
//     }

//     @GetMapping("/profile/{email}")
//     public ResponseEntity<?> getUserProfile(@PathVariable String email) {
//         try {
//             Login user = loginservice.getUserByEmail(email);
//             if (user != null) {
//                 return ResponseEntity.ok(user);
//             } else {
//                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//             }
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching profile: " + e.getMessage());
//         }
//     }
// }


package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.service.LoginService;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Update this to match your frontend URL
@RequestMapping("/api/users")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Login login) {
        try {
            Login registeredUser = loginService.registerUser(login);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login user) {
        try {
            Login authenticatedUser = loginService.loginUser(user.getEmail(), user.getPassword());
            if (authenticatedUser != null) {
                return ResponseEntity.ok(authenticatedUser);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed: " + e.getMessage());
        }
    }

    @GetMapping("/profile/{email}")
    public ResponseEntity<?> getUserProfile(@PathVariable String email) {
        try {
            Login user = loginService.getUserByEmail(email);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching profile: " + e.getMessage());
        }
    }
    
}
