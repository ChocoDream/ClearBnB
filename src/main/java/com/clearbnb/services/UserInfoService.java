package com.clearbnb.services;

import com.clearbnb.entities.UserInfo;
import com.clearbnb.repositories.UserInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoService {

    @Autowired
    UserInfoRepo userInfoRepo;

    public List<UserInfo> findAllUser(){
        return (List<UserInfo>) userInfoRepo.findAll();
    }

    public UserInfo getOneUser(int id){
        return userInfoRepo.findById(id);
    }

}
