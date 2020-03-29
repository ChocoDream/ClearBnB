package com.clearbnb.controllers;

import com.clearbnb.entities.Address;
import com.clearbnb.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AddressController {

    @Autowired
    AddressService addressService;

    @GetMapping("/api/clearbnb/addresses")
    public List<Address> getAllAddresses(){
        return addressService.findAllAddress();
    }

    @GetMapping("/api/clearbnb/address/{id}")
    public Address getOneAddress(@PathVariable int id) {
        return addressService.getOneAddress(id);
    }

    @GetMapping("/api/clearbnb/residencesByRegion/{region}")
    public List<Address> getAllAddressesByRegion(@PathVariable String region) {
        return addressService.getAllAddressByRegion(region);
    }

    @GetMapping("/api/clearbnb/residencesByCity/{city}")
    public List<Address> getAllAddressesByCity(@PathVariable String city) {
        return addressService.getAllAddressByCity(city);
    }

    /*@GetMapping("/api/clearbnb/cities")
    public List<Address> getAllCities() {
        return addressService.getAllCities();
    }*/
}