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

}