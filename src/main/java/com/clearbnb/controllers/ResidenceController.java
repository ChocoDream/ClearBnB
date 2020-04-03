package com.clearbnb.controllers;

import com.clearbnb.entities.Residence;
import com.clearbnb.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidenceController {
    @Autowired
    ResidenceService residenceService;

    @GetMapping("/api/clearbnb/allresidences")
    public List<Residence> getAllResidence() {
        return residenceService.getAllResidences();
    }

    @PostMapping("/api/clearbnb/allresidences")
    public Residence createResidence(@RequestBody Residence residence) {
        return residenceService.createResidence(residence);
    }

    @DeleteMapping("/api/clearbnb/residence/{id}")
    public void deleteResidence(@PathVariable int id) {
        residenceService.deleteResidence(id);
    }

}
