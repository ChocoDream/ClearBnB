package com.clearbnb.services;

import com.clearbnb.entities.Address;
import com.clearbnb.repositories.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepo addressRepo;

    public List<Address> getAddresses() {
        return (List<Address>) addressRepo.findAll();
    }

    public Address createAddress(Address address) {
        return addressRepo.save(address);
    }

    public void deleteAddress(int id) {
        addressRepo.deleteById(id);
    }
}
