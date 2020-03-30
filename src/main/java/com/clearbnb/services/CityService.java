package com.clearbnb.services;

import com.clearbnb.entities.City;
import com.clearbnb.repositories.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    CityRepo cityRepo;

    public List<City> findAllCities() {
        return (List<City>) cityRepo.findAll();
    }


    public List<City> getAllCities() {
        return cityRepo.findAllCities();
    }
}
