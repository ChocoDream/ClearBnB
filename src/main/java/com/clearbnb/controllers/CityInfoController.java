package com.clearbnb.controllers;

import com.clearbnb.entities.CityInfo;
import com.clearbnb.services.CityInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

}
