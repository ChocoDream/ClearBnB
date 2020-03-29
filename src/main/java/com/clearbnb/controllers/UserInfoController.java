package com.clearbnb.controllers;

import com.clearbnb.entities.UserInfo;
import com.clearbnb.services.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class UserInfoController {

    @Autowired
    UserInfoService userInfoService;

    @GetMapping("/api/clearbnb/usersinfo")
    public List<UserInfo> findAllUsers(){
        return userInfoService.findAllUser();
    }

    @GetMapping("/api/clearbnb/usersinfo/{id}")
    public UserInfo getOneUser(@PathVariable int id) {
        return userInfoService.getOneUser(id);
    }
}
