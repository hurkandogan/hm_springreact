package com.hugos.hm.controller;

import com.hugos.hm.model.Location;
import com.hugos.hm.services.LocationService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    public final LocationService locationService;

    public LocationController(LocationService locationService){
        this.locationService = locationService;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    public List<Location> get(){
        return locationService.getAllLocations();
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    public void insert(@RequestBody Location location){
        locationService.insertLocation(location);
    }
}
