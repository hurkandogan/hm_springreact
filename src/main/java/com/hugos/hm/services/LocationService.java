package com.hugos.hm.services;

import com.hugos.hm.model.Alert;
import com.hugos.hm.model.Location;
import com.hugos.hm.repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    public Optional<Location> getOneLocation(Long id){
        return locationRepo.findById(id);
    }

    public Map<String, Object> insertLocation(Location location) {
        Map<String, Object> map = new HashMap<>();
        Alert alert;
        try{
            locationRepo.save(location);
            alert = new Alert(
                    "Location is successfully saved.",
                    "success");
        }catch(Exception e){
            alert = new Alert(
                    "An error occurred! Error: " + e.getMessage(),
                    "danger");
        }

        map.put("alert", alert);
        return map;
    }

    public Map<String, Object> editLocation(Location location){
        Map<String, Object> map = new HashMap<>();
        Alert alert;

        try{
            Optional<Location> locationOptional = locationRepo.findById(location.getId());
            if(locationOptional.isPresent()){
                Location locationData = locationOptional.get();
                locationData.setName(location.getName());
                locationData.setShortName(location.getShortName());
                locationData.setAddress(location.getAddress());
                locationData.setForHouse(location.isForHouse());
                locationData.setForArtwork(location.isForArtwork());
                alert = new Alert (
                        "Changes saved successfully!",
                        "success"
                );
            }else{
                alert = new Alert (
                        "Location is not found! Contact the system admin.",
                        "danger"
                );
            }
        }catch(Exception e){
            System.out.println("Error: " + e.getMessage());
            alert = new Alert (
                    "An error occured! Error: " + e.getMessage(),
                    "danger"
            );
        }
        map.put("alert", alert);
        return map;
    }

    public Map<String, Object> deleteLocation(Long locationId){
        Map<String, Object> map = new HashMap<>();
        Alert alert;
        try{
            locationRepo.deleteById(locationId);
                alert = new Alert (
                        "Location deleted successfully!",
                        "success"
                );
        }catch(Exception e){
            System.out.println("Error: " + e.getMessage());
            alert = new Alert (
                    "An error occurred! Error: " + e.getMessage(),
                    "danger"
            );
        }
        map.put("alert", alert);
        return map;
    }
}
