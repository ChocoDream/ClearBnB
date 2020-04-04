package com.clearbnb.services;

import com.clearbnb.entities.City;
import com.clearbnb.repositories.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    private CityRepo cityRepo;

    public List<City> getAllCities() {
        return (List<City>) cityRepo.findAll();
    }

    public City createCity(City city) {
        return cityRepo.save(city);
    }

    public void deleteCity(int id) {
        cityRepo.deleteById(id);
    }
}
