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

    public static final String GET_CITIES_BY_REGION = "SELECT distinct ci.id as value,\n" +
            "                                       ci.city\n" +
            "                                  FROM cities ci\n" +
            "                                 WHERE ci.region like :region\n" +
            "                                 order by ci.city";
    @Query(value = GET_CITIES_BY_REGION, nativeQuery = true)
    public List<CityInfo> getCitiesByRegion(String region);
}
