package com.hugos.hm.services;

import com.hugos.hm.model.Location;
import com.hugos.hm.repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationRepo locationRepo;
    @Autowired
    public LocationService(LocationRepo locationRepo){
        this.locationRepo = locationRepo;
    }

    public List<Location> getAllLocations(){
        return locationRepo.findAll();
    }

    public void insertLocation(Location location) {
        System.out.println(location);
        locationRepo.save(location);
    }
}
