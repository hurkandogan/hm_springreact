package com.hugos.hm.security;

import org.jetbrains.annotations.NotNull;

import java.util.Iterator;

public enum UserPermission {
    ARTWORK_EDIT("artwork:edit");

    private final String permission;

    UserPermission(String permission){
        this.permission = permission;
    }

    public String getPermission(){
        return permission;
    }
}
