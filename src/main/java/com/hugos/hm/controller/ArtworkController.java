package com.hugos.hm.controller;

import com.hugos.hm.model.Artwork;
import com.hugos.hm.repository.ArtworkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArtworkController {

    private final ArtworkRepo artworkRepo;

    @Autowired
    public ArtworkController(ArtworkRepo artworkRepo) {
        this.artworkRepo = artworkRepo;
    }

    @GetMapping("/artwork")
    List<Artwork> all(){
        return artworkRepo.findAll();
    }

    //TODO: POST, UPDATE, PUT, DELETE
}