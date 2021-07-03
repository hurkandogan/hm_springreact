package com.hugos.hm.controller;

import com.hugos.hm.model.Artwork;
import com.hugos.hm.repository.ArtworkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class ArtworkController {

    private final ArtworkRepo artworkRepo;

    @Autowired
    public ArtworkController(ArtworkRepo artworkRepo) {
        this.artworkRepo = artworkRepo;
    }

    @GetMapping("/artwork")
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    Collection<Artwork> all(){
        return artworkRepo.findAll();
    }

    //@GetMapping("/artwork/{id}")


    //TODO: POST, UPDATE, PUT, DELETE
}