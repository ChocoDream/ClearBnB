package com.clearbnb.controllers;

import com.clearbnb.entities.City;
import com.clearbnb.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CityController {
    @Autowired
    CityService cityService;

    @GetMapping("/api/clearbnb/allcities")
    public List<City> getAllCities() {
        return cityService.getAllCities();
    }

    @GetMapping("/api/clearbnb/allregions")
    public List getAllRegions() {
        return cityService.getAllRegions();
    }

    /*@GetMapping("/api/clearbnb/allcitiesbyregion/{region}")
    public List getCitiesByRegion(@PathVariable String region) {
        return cityService.getAllCitiesByRegion(region);
    }*/

    @PostMapping("/api/clearbnb/allcities")
    public City createCity(@RequestBody City city) {
        return cityService.createCity(city);
    }

}
