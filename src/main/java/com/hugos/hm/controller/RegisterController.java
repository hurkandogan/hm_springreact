package com.hugos.hm.controller;

import com.hugos.hm.model.User;
import com.hugos.hm.services.RegisterService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping
    //@PreAuthorize("hasAnyRole('ROLE_SUPERADMIN')")
    public String createUser(User user){
        return registerService.createUser(user);
    }
}
