package com.clearbnb.controllers;

import com.clearbnb.entities.Amenity;
import com.clearbnb.services.AmenityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AmenityController {

    @Autowired
    AmenityService amenityService;

    @GetMapping("/api/clearbnb/amenitites")
    public List<Amenity> getAllAmenitites(){
        return amenityService.findAllAmenitites();
    }

    @GetMapping("/api/clearbnb/amenity/{id}")
    public Amenity getOneAmenity(@PathVariable int id) {
        return amenityService.getOneAmenity(id);
    }

    @GetMapping("/api/clearbnb/amenitiesByResidenceId/{residence_id}")
    public List<Amenity> getAllAmenitiesByResidenceId(@PathVariable int residence_id) {
        return amenityService.getAllAmenitiesByResidenceId(residence_id);
    }
}
