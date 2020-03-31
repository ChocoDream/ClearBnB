package com.clearbnb.controllers;

import com.clearbnb.entities.Residence;
import com.clearbnb.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ResidenceController {

    @Autowired
    ResidenceService residenceService;

    @GetMapping("/api/clearbnb/residences")
    public List<Residence> getAllResidences(){
        return residenceService.findAllResidences();
    }

    @GetMapping("/api/clearbnb/residences/{id}")
    public Residence getOneResidence(@PathVariable int id) {
        return residenceService.getOneResidence(id);
    }

    @GetMapping("/api/clearbnb/residencesByCity/{city}")
    public List<Residence> getAllResidenceByCity(@PathVariable String city) {
        return residenceService.getAllResidenceByCity(city);
    }

    @GetMapping("/api/clearbnb/residencesByRegion/{region}")
    public List<Residence> getAllResidenceByRegion(@PathVariable String region) {
        return residenceService.getAllResidenceByRegion(region);
    }

    @GetMapping("/api/clearbnb/residencesByAddressId/{address_id}")
    public List<Residence> getAllResidencesByAddressId(@PathVariable int address_id) {
        return residenceService.getAllResidencesByAddressId(address_id);
    }

    @GetMapping("/api/clearbnb/residencesByCityId/{city_id}")
    public List<Residence> getAllResidencesByCityId(@PathVariable int city_id) {
        return residenceService.getAllResidencesByCityId(city_id);
    }

    @GetMapping("/api/clearbnb/residences/cities")
    public List getAllCities() {
        return residenceService.getAllCities();
    }
}