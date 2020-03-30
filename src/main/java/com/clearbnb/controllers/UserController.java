package com.clearbnb.controllers;

import com.clearbnb.entities.User;
import com.clearbnb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/api/clearbnb/users")
    public List<User> findAllUsers(){
        return userService.findAllUser();
    }

  /*  @GetMapping("/api/clearbnb/users/{id}")
    public User getOneUser(@PathVariable int id) {
        return userService.getOneUser(id);
    }*/

  /*  @PostMapping("/api/clearbnb/users")
    public User createNewUser(@RequestBody User user) {
        return userService.createUser(user);
    }*/
}
