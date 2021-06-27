package com.hugos.hm.controller;

import com.hugos.hm.repository.UserRepo;
import com.hugos.hm.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"localhost:3000"})
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepo userRepo;
    private PasswordEncoder encoder;
    private JwtUtils jwtUils;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager,
                          UserRepo userRepo,
                          PasswordEncoder encoder,
                          JwtUtils jwtUtils){
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
        this.encoder = encoder;
        this.jwtUils = jwtUtils;
    }

}
