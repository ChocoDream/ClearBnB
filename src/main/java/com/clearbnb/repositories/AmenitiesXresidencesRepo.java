package com.clearbnb.repositories;

import com.clearbnb.entities.AmenitiesXresidences;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenitiesXresidencesRepo  extends CrudRepository<AmenitiesXresidences, Integer> {
    public AmenitiesXresidences findById(int residence_id);
}
