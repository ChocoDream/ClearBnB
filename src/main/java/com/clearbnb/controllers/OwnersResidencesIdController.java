package com.clearbnb.controllers;

import com.clearbnb.entities.OwnersResidencesId;
import com.clearbnb.services.OwnersResidencesIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OwnersResidencesIdController {
    @Autowired
    OwnersResidencesIdService ownersResidencesIdService;

    @GetMapping("/api/clearbnb/ownersresidences")
    public List<OwnersResidencesId> getOwnersResidencesId() {
        return ownersResidencesIdService.getOwnersResidencesId();
    }

    @PostMapping("/api/clearbnb/ownersresidences")
    public OwnersResidencesId createOwnersresidencesid(@RequestBody OwnersResidencesId ownersResidencesId) {
        return ownersResidencesIdService.createownersresidencesid(ownersResidencesId);
    }

    @GetMapping("/api/clearbnb/ownersbyresidenceId/{residence_id}")
    public List<OwnersResidencesId> findByResidenceId(@PathVariable int residence_id) {
        return ownersResidencesIdService.findByResidenceId(residence_id);
    }

    @DeleteMapping("/api/clearbnb/ownersbyresidence/{residence_id}")
    public void deleteOwnersresidencesid(@PathVariable int residence_id) {
        ownersResidencesIdService.deleteOwnersresidencesid(residence_id);
    }
}
