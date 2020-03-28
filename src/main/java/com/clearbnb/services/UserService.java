package com.clearbnb.services;

import com.clearbnb.entities.User;
import com.clearbnb.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public List<User> findAllUser(){
        return (List<User>) userRepo.findAll();
    }

    public User getOneUser(int id){
        return userRepo.findById(id);
    }

    public User createUser(User user) {
        return userRepo.save(user);
    }
}
