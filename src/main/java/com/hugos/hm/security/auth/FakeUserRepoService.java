package com.hugos.hm.security.auth;

import com.google.common.collect.Lists;
import com.hugos.hm.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

import static com.hugos.hm.security.UserRoles.*;


public class FakeUserRepoService{
    private final PasswordEncoder passwordEncoder;

    public FakeUserRepoService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public Optional<AppUser> selectApplicationUserByUsername(String username) {
        return getApplicationUsers()
                .stream()
                .filter(appUser -> username.equals(appUser.getUsername()))
                .findFirst();
    }
    private List<AppUser> getApplicationUsers() {
        List<AppUser> appUsers = Lists.newArrayList();
        return appUsers;
    }
}
