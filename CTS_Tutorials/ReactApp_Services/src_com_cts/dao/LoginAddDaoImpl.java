package com.cts.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cts.entity.UserEntity;
import com.cts.vo.UserVo;

@Repository
public class LoginAddDaoImpl implements LoginAddDao {

	/// For MyBatis SQL Session is neede
	/*
	 * @Autowired private SqlSessionFactory sql;
	 * 
	 * public void setSql(SqlSessionFactory sql) { this.sql = sql; }
	 */
	@Autowired
	private SessionFactory factory;

	public SessionFactory getFactory() {
		return factory;
	}

	public void setFactory(SessionFactory factory) {
		this.factory = factory;
	}

	public void addLoginDetails(String name, String password) {

		/*
		 * SqlSession session=sql.openSession(); List<LoginDetails> list = new
		 * ArrayList<LoginDetails>();
		 * 
		 * list = session.selectList("LoginDetails.selectAll"); for(LoginDetails
		 * n:list) { System.out.println(n.getName()+"::"+n.getId()); }
		 * System.out.println(list); System.out.println(name+"  "+password);
		 * session.close();
		 */
	}

	@Override
	public void addUsers(UserVo user) {

		Session session = (Session) factory.openSession();

		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");

		UserEntity userEntity = new UserEntity();

		userEntity.setName(user.getName());
		userEntity.setEmailId(user.getEmailId());
		userEntity.setPhoneNumber(user.getPhoneNumber());
		userEntity.setDate(sdf.format(d));
		try {
			session.save(userEntity);
		} catch (Exception e) {

			session.flush();
			session.close();
		}

	}

	@SuppressWarnings("unchecked")
	@Override
	public List<UserVo> getAllUsers() {
		Session session = factory.openSession();
		List<UserVo> list = new ArrayList<UserVo>();
		List<UserEntity> userEntity = new ArrayList<UserEntity>();
		try {
			userEntity = session.createQuery("from UserEntity").list();
		} catch (Exception e) {
			System.out.println("Error while running query:" + e.getMessage());
			e.printStackTrace();
		}

		for (UserEntity entity : userEntity) {
			UserVo user = new UserVo();
			user.setId(entity.getId());
			user.setName(entity.getName());
			user.setEmailId(entity.getEmailId());
			user.setPhoneNumber(entity.getPhoneNumber());
			user.setDate(entity.getDate());
			list.add(user);
		}
		System.out.println("List Size:" + list.size());
		return list;
	}

	@Override
	public void updateUser(UserVo user) {
		Session session = (Session) factory.openSession();
		Transaction tx = session.beginTransaction();
		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");

		UserEntity userEntity = new UserEntity();

		userEntity.setId(user.getId());
		userEntity.setName(user.getName());
		userEntity.setEmailId(user.getEmailId());
		userEntity.setPhoneNumber(user.getPhoneNumber());
		userEntity.setDate(sdf.format(d));
		try {
			session.update(userEntity);
			tx.commit();
		} catch (Exception e) {
			tx.rollback();
			session.flush();
			session.close();
		}

	}

	@Override
	public Integer deleteUser(Integer id) {
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		Query query = session.createQuery("delete UserEntity where id=" + id.toString());
		Integer results;
		try {
			results = query.executeUpdate();
			transaction.commit();
			return results;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}finally {
			session.flush();
			session.close();
		}
		
	}
}
