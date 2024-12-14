package com.example.backend.service;

import com.example.backend.model.ContactForm;
import com.example.backend.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List; // Correct import

@Service
public class ContactFormService {

    @Autowired
    private ContactFormRepository contactFormRepository;

    public ContactForm saveContactForm(ContactForm contactForm) {
        return contactFormRepository.save(contactForm);
    }

    public List<ContactForm> getAllContacts() {
        return contactFormRepository.findAll();
    }
}
