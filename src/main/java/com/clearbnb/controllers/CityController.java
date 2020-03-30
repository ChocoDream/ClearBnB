package com.clearbnb.controllers;

import com.clearbnb.entities.City;
import com.clearbnb.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CityController {

    @Autowired
    CityService cityService;

    @GetMapping("/api/clearbnb/cities")
    public List<City> getAllCities(){
        return cityService.findAllCities();
    }

}
