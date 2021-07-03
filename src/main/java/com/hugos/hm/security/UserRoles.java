package com.hugos.hm.security;

import com.google.common.collect.Sets;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.hugos.hm.security.UserPermission.*;

public enum UserRoles {
    SUPERADMIN(Sets.newHashSet(ARTWORK_EDIT)),
    ADMIN(Sets.newHashSet(ARTWORK_EDIT)),
    USER(Sets.newHashSet(ARTWORK_READ));

    private final Set<UserPermission> permissions;

    UserRoles(Set<UserPermission> permissions){
        this.permissions = permissions;
    }

    public Set<UserPermission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities(){
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}
