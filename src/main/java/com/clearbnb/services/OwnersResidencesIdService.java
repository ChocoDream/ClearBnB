package com.clearbnb.services;

import com.clearbnb.entities.OwnersResidencesId;
import com.clearbnb.repositories.OwnersResidencesIdRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnersResidencesIdService {
    @Autowired
    private OwnersResidencesIdRepo ownersResidencesIdRepo;

    public List<OwnersResidencesId> getOwnersResidencesId() {
        return (List<OwnersResidencesId>) ownersResidencesIdRepo.findAll();
    }

    public OwnersResidencesId createownersresidencesid(OwnersResidencesId ownerxresidences) {
        return ownersResidencesIdRepo.save(ownerxresidences);
    }

    public List<OwnersResidencesId> findByResidenceId(int residence_id) {
        return (List<OwnersResidencesId>) ownersResidencesIdRepo.findByResidenceId(residence_id);
    }

    public void deleteOwnersresidencesid(int residence_id) {
        ownersResidencesIdRepo.deleteById(residence_id);
    }
}
