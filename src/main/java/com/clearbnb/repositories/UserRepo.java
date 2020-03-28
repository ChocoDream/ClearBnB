package com.clearbnb.repositories;

import com.clearbnb.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Integer> {
    public User findById(int id);
}
