package com.hugos.hm.services;

import com.hugos.hm.model.User;
import com.hugos.hm.repository.UserRepo;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisterService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public RegisterService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public String createUser(User user){
        Optional<User> checkUsername = userRepo.findUserByUsername(user.getUsername());
        if(checkUsername.isPresent()){
            return "User " +
                    checkUsername.get().getUsername() +
                    " is already exist.";
        }else {
            if (user.getUsername().isEmpty()) {
                return "Username cannot be empty";
            }
            if (user.getPassword().isEmpty()) {
                return "Password cannot be empty";
            }
            if (user.getFirstName().isEmpty()) {
                return "Firstname cannot be empty";
            }
            if (user.getLastName().isEmpty()) {
                return "Lastname cannot be empty";
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepo.save(user);
            return "User is successfully created!";
        }
    }
    //TODO: Implementation
    public String changePassword(String username, String password){
        return "";
    }
}
