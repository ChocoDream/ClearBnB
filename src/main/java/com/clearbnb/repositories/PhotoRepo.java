package com.clearbnb.repositories;

import com.clearbnb.entities.Photo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepo extends CrudRepository<Photo, Integer> {
    public Photo findById(int id);

    public static final String FIND_PHOTOSBYRESIDENCEID = "SELECT p.id,\n" +
            "           p.residence_id,\n" +
            "           p.path\n" +
            "      FROM photos p\n" +
            "     WHERE p.residence_id = :residence_id\n";
    @Query(value = FIND_PHOTOSBYRESIDENCEID, nativeQuery = true)
    public List<Photo> getPhotosByResidenceId(int residence_id);
}
