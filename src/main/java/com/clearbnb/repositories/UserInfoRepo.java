package com.clearbnb.repositories;

import com.clearbnb.entities.UserInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepo extends CrudRepository<UserInfo, Integer> {
    public UserInfo findById(int id);
}
