package com.clearbnb.repositories;

import com.clearbnb.entities.City;
import com.clearbnb.entities.CityInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepo extends CrudRepository<City, Integer> {
    public City findById(int id);

}
