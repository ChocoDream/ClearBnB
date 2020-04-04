package com.clearbnb.repositories;

import com.clearbnb.entities.AmenitiesResidencesId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenitiesResidencesIdRepo extends CrudRepository<AmenitiesResidencesId, Integer> {
    public AmenitiesResidencesId findById(int residence_id);
}
