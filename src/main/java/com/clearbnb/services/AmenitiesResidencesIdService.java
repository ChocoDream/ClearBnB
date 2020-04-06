package com.clearbnb.services;

import com.clearbnb.entities.AmenitiesResidencesId;
import com.clearbnb.repositories.AmenitiesResidencesIdRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenitiesResidencesIdService {
    @Autowired
    private AmenitiesResidencesIdRepo amenitiesResidencesIdRepo;

    public List<AmenitiesResidencesId> getAmenitiesResidencesId() {
        return (List<AmenitiesResidencesId>) amenitiesResidencesIdRepo.findAll();
    }

    public AmenitiesResidencesId createamenitiesresidencesid(AmenitiesResidencesId amenityxresidences) {
        return amenitiesResidencesIdRepo.save(amenityxresidences);
    }

    public void deleteAmenitiesresidencesid(int residence_id) {
        amenitiesResidencesIdRepo.deleteById(residence_id);
    }
}
