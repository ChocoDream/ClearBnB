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

    public List<City> getAllRegions(){
        return (List<City>) cityRepo.getAllRegions();
    }


    /*public List getAllCitiesByRegion(String region){
        return (List) cityRepo.getCitiesByRegion(region);
    }*/

    public City createCity(City city) {
        return cityRepo.save(city);
    }

    public void deleteCity(int id) {
        cityRepo.deleteById(id);
    }
}
