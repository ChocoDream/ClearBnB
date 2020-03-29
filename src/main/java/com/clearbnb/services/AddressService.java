package com.clearbnb.services;

import com.clearbnb.entities.Address;
import com.clearbnb.repositories.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    AddressRepo addressRepo;

    public List<Address> findAllAddress() {
        return (List<Address>) addressRepo.findAll();
    }

    public Address getOneAddress(int id) {
        return addressRepo.findById(id);
    }

    public List<Address> getAllAddressByRegion(String region) {
        return (List<Address>) addressRepo.findByRegionContaining(region);
    }

    public List<Address> getAllAddressByCity(String city) {
        return (List<Address>) addressRepo.findByCityContaining(city);
    }

}