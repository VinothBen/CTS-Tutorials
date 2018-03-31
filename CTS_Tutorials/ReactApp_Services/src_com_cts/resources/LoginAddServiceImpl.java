package com.cts.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.dao.LoginAddDao;
import com.cts.dao.LoginAddDaoImpl;
import com.cts.vo.UserVo;

@Service
public class LoginAddServiceImpl implements LoginAddDao {

	@Autowired
	private LoginAddDaoImpl addDAO;

	public void setAdd(LoginAddDaoImpl addDAO) {
		this.addDAO = addDAO;
	}

	public void addLoginDetails(String name, String password) {
		//add.addLoginDetails(name, password);
	}

	public void addUsers(UserVo user){
		addDAO.addUsers(user);
	}
	@Override
	public List<UserVo> getAllUsers() {
		List<UserVo> list = addDAO.getAllUsers(); 
		return list;
	}

	public void updateUser(UserVo user){
		addDAO.updateUser(user);
	}
	
	public Integer deleteUser(Integer id){
		return addDAO.deleteUser(id);
	}

}