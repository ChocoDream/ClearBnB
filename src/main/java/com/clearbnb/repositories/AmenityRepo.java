package com.clearbnb.repositories;

import com.clearbnb.entities.Amenity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AmenityRepo extends CrudRepository<Amenity, Integer>{

    public Amenity findById(int id);

    public static final String FIND_AMENITIESBYRESIDENCEID = "select a.id," +
            "                                                       axr.residence_id," +
            "                                                       a.name," +
            "                                                       axr.start_date," +
            "                                                       axr.end_date\n" +
            "                                                  from amenities_x_residences axr,\n" +
            "                                                       amenitites a\n" +
            "                                                 where axr.amenity_id = a.id\n" +
            "                                                   and axr.residence_id = :residence_id\n" +
            "                                              order by a.name";
    @Query(value = FIND_AMENITIESBYRESIDENCEID, nativeQuery = true)
    public List<Amenity> findByResidenceId(int residence_id);
}
