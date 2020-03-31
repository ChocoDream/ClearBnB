package com.clearbnb.services;

import com.clearbnb.configs.MyUserDetailsService;
import com.clearbnb.entities.User;
import com.clearbnb.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public User findCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepo.findByUsername(username);
    }

    public User registerUser(User user) {
        return myUserDetailsService.addUser(
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getFirst_name(),
                user.getLast_name());
    }
}
