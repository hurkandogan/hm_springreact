package com.hugos.hm.security.auth;

import java.util.Optional;

public interface ApplicationUserDao {
    Optional<ApplicationUser> selectApplicationUserByUsername(String username);
}