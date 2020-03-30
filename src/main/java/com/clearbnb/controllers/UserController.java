package com.clearbnb.controllers;

import com.clearbnb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    /*@PostMapping("/auth/register")
    public User registerUser(@RequestBody)*/


}
