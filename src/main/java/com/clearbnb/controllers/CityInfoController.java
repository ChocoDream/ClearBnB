package com.clearbnb.controllers;

import com.clearbnb.entities.CityInfo;
import com.clearbnb.services.CityInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CityInfoController {

    @Autowired
    CityInfoService cityInfoService;

    @GetMapping("/api/clearbnb/cities")
    public List<CityInfo> getAllCities(){
        return cityInfoService.findAllCities();
    }

    @GetMapping("/api/clearbnb/citiesbyregion/{region}")
    public List<CityInfo> getCitiesByRegion(@PathVariable String region) {
        return cityInfoService.getAllCitiesByRegion(region);
    }

}
