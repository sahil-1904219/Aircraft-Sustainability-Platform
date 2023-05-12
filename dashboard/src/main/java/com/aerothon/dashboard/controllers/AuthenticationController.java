package com.aerothon.dashboard.controllers;

import com.aerothon.dashboard.model.User;
import com.aerothon.dashboard.repositories.UserRepository;
import com.aerothon.dashboard.util.AuthenticationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {

        String password = user.getPassword();
        String encryptedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        user.setPassword(encryptedPassword);
        userRepository.save(user);
        return ResponseEntity.ok().body("User saved successfully!");
    }


    @PostMapping("/login")
    public Map<String,Object>  login(@RequestBody AuthenticationRequest authenticationRequest) {
        String username = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();
        User user = userRepository.findByEmail(username);
        Map<String,Object> map=new HashMap<>();
        map.put("success",true);
        if (user == null) {
            map.put("success",false);
            return map;
        }
        if (BCrypt.checkpw(password, user.getPassword())) {
            return  map;
        } else {
            map.put("success",false);
            return map;
        }
    }
}
