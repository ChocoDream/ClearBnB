package com.clearbnb.services;

import com.clearbnb.entities.Residence;
import com.clearbnb.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    ResidenceRepo residenceRepo;

    public List<Residence> findAllResidences() {
        return (List<Residence>) residenceRepo.findAll();
    }

    public Residence getOneResidence(int id) {
        return residenceRepo.findById(id);
    }

    public List<Residence> getAllResidencesByAddressId(int address_id) {
        return residenceRepo.findByAddressId(address_id);
    }

    public List<Residence> getAllResidencesByCityId(int city_id) {
        return residenceRepo.findByCityId(city_id);
    }

    public List<Residence> getAllResidenceByCity(String city) {
        return residenceRepo.findByCityContaining(city);
    }

    public List<Residence> getAllResidenceByRegion(String region) {
        return residenceRepo.findByRegionContaining(region);
    }

    public List getAllCities() {
        return residenceRepo.findAllCities();
    }

    public List<Residence> getAllResidencesBySearchParameters(int city_id,
                                                              int start_date,
                                                              int end_date,
                                                              int max_guest) {
        return residenceRepo.findBySearchParameters(city_id,start_date,end_date,max_guest);
    }
}

