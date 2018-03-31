package com.cts.vo;

public class LoginDetails {

	private String name;
	private String password;
    private String id;
    
	public LoginDetails(String name, String password, String id) {
		super();
		this.name = name;
		this.password = password;
		this.id = id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LoginDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

}