package com.clearbnb.services;

import com.clearbnb.entities.Address;
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

    public List<Residence> getAllResidenceByCity(String city) {
        return residenceRepo.findByCityContaining(city);
    }

    public List<Residence> getAllResidenceByRegion(String region) {
        return residenceRepo.findByRegionContaining(region);
    }

    public List getAllCities() {
        return residenceRepo.findAllCities();
    }
}

