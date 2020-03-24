package com.clearbnb.controllers;

import com.clearbnb.entities.Residence;
import com.clearbnb.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidenceController {

    @Autowired
    private ResidenceService residenceService;

    @GetMapping("/api/clearbnb/residences")
    public List<Residence> getAllResidences(){
        return residenceService.getAllResidences();
    }

    @GetMapping("/api/clearbnb/residences/{id}")
    public Residence getOneResidence(@PathVariable int id){
        return residenceService.getOneResidence(id);
    }

    @PostMapping("/api/residences")
    public Residence createNewResidence(@RequestBody Residence residence){
        return residenceService.createResidence(residence);
    }

    @DeleteMapping("/api/residences/{id}")
    public void deleteRecipe(@PathVariable int id){
        residenceService.deleteResidence(id);
    }
}
