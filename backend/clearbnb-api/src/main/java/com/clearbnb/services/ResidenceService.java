package com.clearbnb.services;

import com.clearbnb.entities.Residence;
import com.clearbnb.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ResidenceService {
    @Autowired
    private ResidenceRepo residenceRepo;

    public Residence getOneResidence(int id){
        return (Residence) residenceRepo.findById(id);
    }

    public List<Residence> getAllResidences(){
        return (List<Residence>) residenceRepo.findAll();
    }

    public Residence createResidence(Residence residence){
        return residenceRepo.save(residence);
    }

    public void deleteResidence(int id){
        residenceRepo.deleteById(id);
    }
}
