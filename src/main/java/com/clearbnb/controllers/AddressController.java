package com.clearbnb.controllers;

import com.clearbnb.entities.Address;
import com.clearbnb.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AddressController {
    @Autowired
    AddressService addressService;

    @GetMapping("/api/clearbnb/addresses")
    public List<Address> getAddress() {
        return addressService.getAddresses();
    }

    @PostMapping("/api/clearbnb/addresses")
    public Address createAddress(@RequestBody Address address) {
        return addressService.createAddress(address);
    }

    @DeleteMapping("/api/clearbnb/address/{id}")
    public void deleteAddress(@PathVariable int id) {
        addressService.deleteAddress(id);
    }
}
