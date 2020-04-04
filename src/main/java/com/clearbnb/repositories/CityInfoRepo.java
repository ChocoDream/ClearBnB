package com.clearbnb.repositories;

import com.clearbnb.entities.CityInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityInfoRepo extends CrudRepository<CityInfo, Integer> {
    public CityInfo findById(int id);

    public static final String FIND_CITIES = "SELECT distinct ci.*" +
            "                                   FROM cities ci " +
            "                               order by ci.city";
    @Query(value = FIND_CITIES, nativeQuery = true)
    public List<CityInfo> findAllCities();
}
