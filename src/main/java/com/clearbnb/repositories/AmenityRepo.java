package com.clearbnb.repositories;

import com.clearbnb.entities.Amenity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmenityRepo extends CrudRepository<Amenity, Integer>{

    public Amenity findById(int id);
}
