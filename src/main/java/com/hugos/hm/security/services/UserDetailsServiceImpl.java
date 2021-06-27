package com.hugos.hm.security.services;

import com.hugos.hm.model.User;
import com.hugos.hm.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hugos.hm.security.services.UserDetailsImpl;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepo userRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        User user = userRepo.findUserByMail(mail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + mail));
        return UserDetailsImpl.build(user);
    }

}
