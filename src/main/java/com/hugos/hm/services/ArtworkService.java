package com.hugos.hm.services;

import com.hugos.hm.model.Alert;
import com.hugos.hm.model.Artwork;
import com.hugos.hm.repository.ArtworkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ArtworkService {

    private final ArtworkRepo artworkRepo;

    @Autowired
    public ArtworkService(ArtworkRepo artworkRepo) {
        this.artworkRepo = artworkRepo;
    }

    public Long getArtworkCount() {
        return artworkRepo.count();
    }

    public List<Artwork> getAllArtworks() {
        return artworkRepo.findAll();
    }

    public Optional<Artwork> getOneArtwork(Long id) {
        return artworkRepo.findById(id);
    }

    public Map<String, Object> insertArtwork(Artwork artwork) {
        Map<String, Object> map = new HashMap<>();
        Alert alert;
        try {
            artworkRepo.save(artwork);
            alert = new Alert(
                    "New artwork is successfully saved!",
                    "success"
            );
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            alert = new Alert(
                    "An error occured: " + e.getMessage(),
                    "success"
            );
        }
        map.put("alert", alert);
        return map;
    }

    //TODO: Change to patch instead put?
    @Transactional
    public Map<String, Object> updateArtwork(Artwork artwork) {
        Map<String, Object> map = new HashMap<>();
        Alert alert;
        try {
            Optional<Artwork> artworkOptional = artworkRepo.findById(artwork.getId());
            if (artworkOptional.isPresent()) {
                Artwork artworkOptionalData = artworkOptional.get();
                artworkOptionalData.setArtistName(artwork.getArtistName());
                artworkOptionalData.setPurchaseDate(artwork.getPurchaseDate());
                artworkOptionalData.setDescription(artwork.getDescription());
                artworkOptionalData.setFraming(artwork.getFraming());
                artworkOptionalData.setImageLink(artwork.getImageLink());
                artworkOptionalData.setArtworkName(artwork.getArtworkName());
                artworkOptionalData.setPrice(artwork.getPrice());
                artworkOptionalData.setSizes(artwork.getSizes());
                artworkOptionalData.setTaxPrice(artwork.getTaxPrice());
                artworkOptionalData.setTransportPrice(artwork.getTransportPrice());
                alert = new Alert(
                        "Changes saved successfully.",
                        "success"
                );
            } else {
                alert = new Alert(
                        "Artwork with this id: " + artwork.getId() + " is not found! Please contact admin.",
                        "error"
                );
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            alert = new Alert(
                    "There is an error occurred. Please contact admin. Error: " + e.getMessage(),
                    "error"
            );
        }
        map.put("alert", alert);
        return map;
    }

    public Map<String, Object> deleteArtwork(Long artworkId) {
        Map<String, Object> map = new HashMap<>();
        Alert alert;
        try {
            artworkRepo.deleteById(artworkId);
            alert = new Alert(
                    "Artwork ID: " + artworkId + " is deleted successfully.",
                    "success"
            );
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            alert = new Alert(
                    "An error occurred. Please contact admin. Error: " + e.getMessage(),
                    "error"
            );
        }
        map.put("alert", alert);
        return map;
    }
}
