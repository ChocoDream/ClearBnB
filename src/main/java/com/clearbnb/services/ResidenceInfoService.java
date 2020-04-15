package com.clearbnb.services;

import com.clearbnb.entities.ResidenceInfo;
import com.clearbnb.repositories.ResidenceInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceInfoService {

    @Autowired
    ResidenceInfoRepo residenceInfoRepo;

    public List<ResidenceInfo> findAllResidences() {
        return (List<ResidenceInfo>) residenceInfoRepo.findAll();
    }

    public ResidenceInfo getOneResidence(int id) {
        return residenceInfoRepo.findById(id);
    }

    public List<ResidenceInfo> getAllResidencesByAddressId(int address_id) {
        return residenceInfoRepo.findByAddressId(address_id);
    }

    public List<ResidenceInfo> getAllResidencesByCityId(int city_id) {
        return residenceInfoRepo.findByCityId(city_id);
    }

    public List<ResidenceInfo> getAllResidenceByCity(String city) {
        return residenceInfoRepo.findByCityContaining(city);
    }

    public List<ResidenceInfo> getAllResidenceByRegion(String region) {
        return residenceInfoRepo.findByRegionContaining(region);
    }

    public List getAllCities() {
        return residenceInfoRepo.findAllCities();
    }

    public List<ResidenceInfo> getAllResidencesBySearchParameters(int city_id,
                                                                  int start_date,
                                                                  int end_date,
                                                                  int max_guest) {
        return residenceInfoRepo.findBySearchParameters(city_id,start_date,end_date,max_guest);
    }

    public List<ResidenceInfo> getResidencesByOwnerId(int owner_id) {
        return residenceInfoRepo.findByOwnerId(owner_id);
    }
}

