package com.hugos.hm.controller;

import com.hugos.hm.services.ArtworkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final ArtworkService artworkService;

    public DashboardController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }

    @GetMapping
    public Map<String, Number> getAllData(){
        Map<String, Number> dataSet = new HashMap<>();
        dataSet.put("artwork_count", artworkService.getArtworkCount());
        return dataSet;
    }
}
