package com.hugos.hm.services;

import com.hugos.hm.model.Artwork;
import com.hugos.hm.repository.ArtworkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ArtworkService {

    private final ArtworkRepo artworkRepo;

    @Autowired
    public ArtworkService(ArtworkRepo artworkRepo) {
        this.artworkRepo = artworkRepo;
    }

    public List<Artwork> getAllArtworks(){
        return artworkRepo.findAll();
    }

    public Optional<Artwork> getOneArtwork(Long id){
        return artworkRepo.findById(id);
    }

    public void insertArtwork(Artwork artwork){
        artworkRepo.save(artwork);
    }

    public void deleteArtwork(Long id){
        artworkRepo.deleteById(id);
    }

    @Transactional
    public void updateArtwork(Artwork artwork){
        Artwork artworkOptional = artworkRepo.findById(artwork.getId())
                .orElseThrow(() -> new IllegalStateException((
                        "Artwork with this id: " + artwork.getId() + " is not found!"
                        )));
        // TODO: Check if they are the same with old data
        artworkOptional.setArtistName(artwork.getArtistName());
        artworkOptional.setPurchaseDate(artwork.getPurchaseDate());
        artworkOptional.setDescription(artwork.getDescription());
        artworkOptional.setFraming(artwork.getFraming());
        artworkOptional.setImageLink(artwork.getImageLink());
        artworkOptional.setArtworkName(artwork.getArtworkName());
        artworkOptional.setPrice(artwork.getPrice());
        artworkOptional.setSizes(artwork.getSizes());
        artworkOptional.setTaxPrice(artwork.getTaxPrice());
        artworkOptional.setTransportPrice(artwork.getTransportPrice());
    }
}
