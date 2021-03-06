package com.hugos.hm.controller;

import com.hugos.hm.model.Location;
import com.hugos.hm.services.LocationService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @GetMapping("/{locationId}")
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    public Optional<Location> getOne(@PathVariable("locationId") Long id){
        return locationService.getOneLocation(id);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN', 'USER')")
    public Map<String, Object> insert(@RequestBody Location location){
        return locationService.insertLocation(location);
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN')")
    public Map<String, Object> edit(@RequestBody Location location){
        System.out.println(location.toString());
        return locationService.editLocation(location);
    }

    @DeleteMapping("/{locationId}")
    @PreAuthorize("hasAnyRole('ROLE_SUPERADMIN', 'ADMIN')")
    public Map<String, Object> delete(@PathVariable("locationId") Long id){
        return locationService.deleteLocation(id);
    }


}
