package com.clearbnb.controllers;

import com.clearbnb.entities.User;
import com.clearbnb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public User registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

    @GetMapping("/auth/user")
    public User getUser(){
        return userService.findCurrentUser();
    }


}
