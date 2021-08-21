package com.hugos.hm.controller;

import com.hugos.hm.services.ArtworkService;
import com.hugos.hm.services.LocationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final ArtworkService artworkService;
    private final LocationService locationService;

    public DashboardController(ArtworkService artworkService, LocationService locationService) {
        this.artworkService = artworkService;
        this.locationService = locationService;
    }

    @GetMapping
    public Map<String, Number> getAllData(){
        Map<String, Number> dataSet = new HashMap<>();
        dataSet.put("artwork_count", artworkService.getArtworkCount());
        dataSet.put("artwork_locations_count", locationService.getArtworkLocationsCount());
        return dataSet;
    }
}