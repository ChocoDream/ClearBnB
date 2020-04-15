package com.clearbnb.services;

import com.clearbnb.entities.CityInfo;
import com.clearbnb.repositories.CityInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityInfoService {

    @Autowired
    CityInfoRepo cityInfoRepo;

    public List<CityInfo> findAllCities() {
        return (List<CityInfo>) cityInfoRepo.findAll();
    }


    public List<CityInfo> getAllCities() {
        return cityInfoRepo.findAllCities();
    }


    public List<CityInfo> getAllCitiesByRegion(String region){
        return (List<CityInfo>) cityInfoRepo.getCitiesByRegion(region);
    }
}
