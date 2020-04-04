package com.clearbnb.services;

import com.clearbnb.entities.AmenitiesXresidences;
import com.clearbnb.repositories.AmenitiesXresidencesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenitiesXresidencesService {

    @Autowired
    private AmenitiesXresidencesRepo amenitiesXresidencesRepo;

    public List<AmenitiesXresidences> getAmenitiesxresidences() {
        return (List<AmenitiesXresidences>) amenitiesXresidencesRepo.findAll();
    }

    public AmenitiesXresidences createamenitiesxresidences(AmenitiesXresidences amenitiesXresidences) {
        return amenitiesXresidencesRepo.save(amenitiesXresidences);
    }

    public void deleteAmenitiesxresidences(int residence_id) {
        amenitiesXresidencesRepo.deleteById(residence_id);
    }
}
