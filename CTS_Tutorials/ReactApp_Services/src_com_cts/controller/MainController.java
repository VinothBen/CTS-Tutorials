package com.cts.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.cts.services.LoginAddServiceImpl;
import com.cts.vo.UserVo;

@RestController
public class MainController {

	@Autowired
	private LoginAddServiceImpl addDetails;

	public void setAdd(LoginAddServiceImpl addDetails) {
		this.addDetails = addDetails;
	}

	@RequestMapping(value = "/init")
	public ModelAndView initLoginPage() {
		ModelAndView view = new ModelAndView();
		view.setViewName("loginpage");
		return view;
	}

	// http://localhost:8022/MyBatis/add?name=Ben&emailId=xxxxx@mail.com&phoneNumber=12312390
	@RequestMapping(value = "add", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> loginAdd(
			@RequestParam("name") String name, 
			@RequestParam("emailId") String emailId,
			@RequestParam("phoneNumber") Long phoneNumber, 
			@ModelAttribute UserVo userVo,
			BindingResult result,
			Map<String, Object> map) {

		if (result.hasErrors()) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		/*
		 * @SuppressWarnings("resource") ApplicationContext ctx = new
		 * ClassPathXmlApplicationContext("dispatcher-servlet.xml");
		 * 
		 * DefaultSqlSessionFactory sessionFactory = (DefaultSqlSessionFactory)
		 * ctx.getBean("sqlSessionFactory");
		 */
		System.out.println("GET METHOD CALLED!!");
		addDetails.addUsers(userVo);
		if (name == null || emailId == null || phoneNumber == null) {
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@RequestMapping(value = "addpost", method = RequestMethod.POST, headers = "Accept=application/json")
	@ResponseBody
	public ResponseEntity<?> loginCheck(@RequestParam("name") String name, @RequestParam("password") String password,
			Model map) {

		System.out.println("ADD_POST_JSON METHOD CALLED!!");
		System.out.println(name + " " + password);
		if (name == null || password == null) {
			System.out.println("NO DATA!");
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@RequestMapping(value = "addposturl", method = RequestMethod.POST, headers = "Accept=application/x-www-form-urlencoded")
	@ResponseBody
	public ResponseEntity<?> login(@RequestParam("name") String name, @RequestParam("password") String password,
			Model map) {

		System.out.println("ADD_POST_URL_ENCODED METHOD CALLED!!");
		System.out.println(name + " " + password);
		if (name == null || password == null) {
			System.out.println("NO DATA!");
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@RequestMapping(value = "/getAllUsers", produces = "application/json")
	@ResponseBody
	public ResponseEntity<List<UserVo>> getAllList() {

		System.out.println("GET_ALL_USERS METHOD CALLED!!!");

		List<UserVo> list = addDetails.getAllUsers();
		if (list.isEmpty()) {
			return new ResponseEntity<List<UserVo>>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<List<UserVo>>(list, HttpStatus.OK);
	}
	
	//http://localhost:8022/MyBatis/updateuser?id=1&name=Ben&emailId=xxxxx@mail.com&phoneNumber=888888
	@RequestMapping(value = "/updateuser", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?> updateUser(
			@RequestParam("id") Integer id,
			@RequestParam("name") String name,
			@RequestParam("emailId")String emailId,
			@RequestParam("phoneNumber")Long phoneNumber,
			@ModelAttribute UserVo user,
			BindingResult result) {
		if(result.hasErrors()){
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		System.out.println("UpdateUser Method Called!!");
		if (name == null || emailId == null || phoneNumber == null) {
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		}
		addDetails.updateUser(user);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//http://localhost:8022/MyBatis/deleteuser?id=1
	@RequestMapping(value = "/deleteuser", method= RequestMethod.GET)
	public ResponseEntity<String> deleteUser(@RequestParam("id") Integer id){
		
		if(id == null){
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		else{
			System.out.println("Delete User Method Called!!");
			Integer i= addDetails.deleteUser(id);
			if(i == 1){
			     return new ResponseEntity<String>(HttpStatus.OK);
			}
			else{
				return new ResponseEntity<String>(HttpStatus.CONFLICT);
			}
		}
	}
}
