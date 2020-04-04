package com.clearbnb.controllers;

import com.clearbnb.entities.AmenitiesXresidences;
import com.clearbnb.entities.ResidenceInfo;
import com.clearbnb.services.AmenitiesXresidencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AmenitiesXresidencesController {
    @Autowired
    AmenitiesXresidencesService amenitiesXresidencesService;

    @GetMapping("/api/clearbnb/amxres")
    public List<AmenitiesXresidences> getAmenitiesXresidences() {
        return amenitiesXresidencesService.getAmenitiesxresidences();
    }

    @PostMapping("/api/clearbnb/amxres")
    public AmenitiesXresidences createAmenitiesXresidences(@RequestBody AmenitiesXresidences amenitiesXresidences) {
        return amenitiesXresidencesService.createamenitiesxresidences(amenitiesXresidences);
    }

    /*@PostMapping("/api/clearbnb/amxresbyresidenceid/{residence_id}")
    public AmenitiesXresidences findById(int residence_id){
        return amenitiesXresidencesService.findById(int residence_id)(amenitiesXresidences);
    }*/

    @DeleteMapping("/api/clearbnb/amenitiesbyresidence/{residence_id}")
    public void deleteAmenitiesXresidences(@PathVariable int residence_id) {
        amenitiesXresidencesService.deleteAmenitiesxresidences(residence_id);
    }
}
