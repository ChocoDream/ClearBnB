package com.clearbnb.services;
import com.clearbnb.entities.Amenity;
import com.clearbnb.repositories.AmenityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenityService {
    @Autowired
    AmenityRepo amenityRepo;

    public List<Amenity> findAllAmenities() {
        return (List<Amenity>) amenityRepo.findAll();
    }

    public Amenity getOneAmenity(int id) {
        return amenityRepo.findById(id);
    }

    public List<Amenity>  getAllAmenitiesByResidenceId(int residence_id) {
        return amenityRepo.findByResidenceId(residence_id);
    }

}
