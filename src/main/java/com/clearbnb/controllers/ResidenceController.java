package com.clearbnb.controllers;

import com.clearbnb.entities.Residence;
import com.clearbnb.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ResidenceController {

    @Autowired
    ResidenceService residenceService;

    @GetMapping("/api/clearbnb/residences")
    public List<Residence> getAllResidences(){
        return residenceService.findAllResidences();
    }

    @GetMapping("/api/clearbnb/residences/{id}")
    public Residence getOneResidence(@PathVariable int id) {
        return residenceService.getOneResidence(id);
    }
}