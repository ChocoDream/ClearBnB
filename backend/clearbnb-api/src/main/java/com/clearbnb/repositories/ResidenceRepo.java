package com.clearbnb.repositories;

import com.clearbnb.entities.Residence;
import org.springframework.data.repository.CrudRepository;

public interface ResidenceRepo extends CrudRepository<Residence, Integer> {
    public Residence findById(int id);
}
