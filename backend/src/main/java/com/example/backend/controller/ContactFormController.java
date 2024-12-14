package com.example.backend.controller;

import com.example.backend.model.ContactForm;
import com.example.backend.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List; // Correct import

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Update this to match your frontend URL
@RequestMapping("/api/contact")
public class ContactFormController {

    @Autowired
    private ContactFormService contactFormService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitContactForm(@RequestBody ContactForm contactForm) {
        try {
            ContactForm savedContactForm = contactFormService.saveContactForm(contactForm);
            return ResponseEntity.ok(savedContactForm);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving contact form: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<ContactForm>> getAllMessages() {
        List<ContactForm> messages = contactFormService.getAllContacts();
        return ResponseEntity.ok(messages);
    }
}
