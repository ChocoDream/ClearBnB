package com.clearbnb.repositories;

import com.clearbnb.entities.City;
import com.clearbnb.entities.CityInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepo extends CrudRepository<City, Integer> {
    public City findById(int id);

    public static final String GET_REGIONS = "SELECT distinct ci.region " +
            "                                  FROM cities ci " +
            "                                 order by ci.region";
    @Query(value = GET_REGIONS, nativeQuery = true)
    public List getAllRegions();

    /*public static final String GET_CITIES_BY_REGION = "SELECT distinct ci.id value, ci.city label" +
            "                                  FROM cities ci " +
            "                                 WHERE ci.region like :region" +
            "                                 order by ci.region";
    @Query(value = GET_CITIES_BY_REGION, nativeQuery = true)
    public List getCitiesByRegion(String region);*/

}
