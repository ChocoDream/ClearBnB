package com.clearbnb.controllers;

import com.clearbnb.entities.ResidenceInfo;
import com.clearbnb.services.ResidenceInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidenceInfoController {

    @Autowired
    ResidenceInfoService residenceInfoService;

    @GetMapping("/api/clearbnb/residences")
    public List<ResidenceInfo> getAllResidences(){
        return residenceInfoService.findAllResidences();
    }

    @GetMapping("/api/clearbnb/residences/{id}")
    public ResidenceInfo getOneResidence(@PathVariable int id) {
        return residenceInfoService.getOneResidence(id);
    }

    @GetMapping("/api/clearbnb/residencesByCity/{city}")
    public List<ResidenceInfo> getAllResidenceByCity(@PathVariable String city) {
        return residenceInfoService.getAllResidenceByCity(city);
    }

    @GetMapping("/api/clearbnb/residencesByRegion/{region}")
    public List<ResidenceInfo> getAllResidenceByRegion(@PathVariable String region) {
        return residenceInfoService.getAllResidenceByRegion(region);
    }

    @GetMapping("/api/clearbnb/residencesByAddressId/{address_id}")
    public List<ResidenceInfo> getAllResidencesByAddressId(@PathVariable int address_id) {
        return residenceInfoService.getAllResidencesByAddressId(address_id);
    }

    @GetMapping("/api/clearbnb/residencesByCityId/{city_id}")
    public List<ResidenceInfo> getAllResidencesByCityId(@PathVariable int city_id) {
        return residenceInfoService.getAllResidencesByCityId(city_id);
    }

    @GetMapping("/api/clearbnb/residences/cities")
    public List getAllCities() {
        return residenceInfoService.getAllCities();
    }

    @GetMapping("/api/clearbnb/residenceSearch/{city_id}/{start_date}/{end_date}/{max_guest}")
    public List<ResidenceInfo> getAllResidencesBySearchParameters(@PathVariable int city_id,
                                                                  @PathVariable int start_date,
                                                                  @PathVariable int end_date,
                                                                  @PathVariable int max_guest
                                                    ) {
        return residenceInfoService.getAllResidencesBySearchParameters(city_id,start_date,end_date,max_guest);
    }
}