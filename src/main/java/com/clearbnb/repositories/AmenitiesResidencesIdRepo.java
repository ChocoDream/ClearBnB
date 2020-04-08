package com.clearbnb.repositories;

import com.clearbnb.entities.AmenitiesResidencesId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AmenitiesResidencesIdRepo extends CrudRepository<AmenitiesResidencesId, Integer> {
    public AmenitiesResidencesId findById(int residence_id);

    public static final String FIND_AMENITIESBYRESIDENCEID = "SELECT ar.id,\n" +
            "           ar.amenity_id,\n" +
            "           ar.residence_id,\n" +
            "           ar.start_date,\n" +
            "           ar.end_date\n" +
            "      FROM amenities_x_residences ar\n" +
            "     WHERE ar.residence_id = :residence_id";
    @Query(value = FIND_AMENITIESBYRESIDENCEID, nativeQuery = true)
    public List<AmenitiesResidencesId> findByResidenceId(int residence_id);
}
