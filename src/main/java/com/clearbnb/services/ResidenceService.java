package com.clearbnb.services;

import com.clearbnb.entities.Residence;
import com.clearbnb.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    private ResidenceRepo residenceRepo;

    public List<Residence> getAllResidences() {
        return (List<Residence>) residenceRepo.findAll();
    }

    public Residence createResidence(Residence residence) {
        return residenceRepo.save(residence);
    }

    public void deleteResidence(int id) {
        residenceRepo.deleteById(id);
    }
}
