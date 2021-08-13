package com.hugos.hm.controller;

import com.hugos.hm.model.Artwork;
import com.hugos.hm.services.ArtworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/artwork")
public class ArtworkController {

    private final ArtworkService artworkService;

    @Autowired
    public ArtworkController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }

    @GetMapping()
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    List<Artwork> all(){
        return artworkService.getAllArtworks();
    }

    @GetMapping("/{artworkId}")
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    Optional<Artwork> getOne(@PathVariable("artworkId") Long id){
        return artworkService.getOneArtwork(id);
    }

    @PostMapping()
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN')")
    public Map<String, Object> insert(@RequestBody Artwork artwork){
        return artworkService.insertArtwork(artwork);
    }

    @PutMapping()
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN')")
    public Map<String, Object> update(@RequestBody Artwork artwork){
        return artworkService.updateArtwork(artwork);
    }

    @DeleteMapping ("/{artworkId}")
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN')")
    public Map<String, Object> delete(@PathVariable("artworkId") Long id){
        return artworkService.deleteArtwork(id);
    }
}