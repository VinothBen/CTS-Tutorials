package com.cts.services;

import java.util.List;

import com.cts.vo.UserVo;

//@Service
//@Transactional
public interface LoginAddService {
 public void addLoginDetails(String name, String password);
 public List<UserVo> getAllUsers();
 public void addUsers(UserVo user);
 public void updateUser(UserVo user);
 public Integer deleteUser(Integer id);
}