package com.clearbnb.repositories;

import com.clearbnb.entities.Address;
import com.clearbnb.entities.Residence;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResidenceRepo extends CrudRepository<Residence, Integer> {
    public Residence findById(int id);

    public List<Residence> findByCityContaining(String city);

    public List<Residence> findByRegionContaining(String region);

    //public List<Residence> findByAddressId(int addressId);
    public static final String FIND_RESIDENCEBYADDRESSID = "SELECT r.id,\n" +
                "           r.price,\n" +
                "           r.rooms,\n" +
                "           r.max_guests,\n" +
                "           r.address_id,           \n" +
                "           a.country,\n" +
                "           a.region,           \n" +
                "           a.city,\n" +
                "           a.zip_code,\n" +
                "           a.street_name,\n" +
                "           a.street_number\n" +
                "      FROM residences r,\n" +
                "           addresses a\n" +
                "     WHERE r.address_id = a.id\n" +
                "      AND r.address_id = :address_id";
    @Query(value = FIND_RESIDENCEBYADDRESSID, nativeQuery = true)
    public List<Residence> findByAddressId(int address_id);

    public static final String FIND_CITIES = "SELECT distinct a.id,a.city FROM residences r, addresses a WHERE r.address_id = a.id order by a.city";
    @Query(value = FIND_CITIES, nativeQuery = true)
    public List findAllCities();
}
