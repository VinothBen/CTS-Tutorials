package com.cts.vo;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Component()
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserVo {

	
	private Integer id;
	
	private String name;
	
	private Long phoneNumber;
	
	private String emailId;
	
	private String date;
	
	
	/*@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}*/
/*
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id != other.id)
			return false;
		return true;
	}*/

	

	public UserVo(Integer id, String name, Long phoneNumber, String emailId, String date) {
		super();
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.date = date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Long getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber	+ ", emailId=" + emailId + ", date=" + date + "]";
	}

	public UserVo() {
		super();
		// TODO Auto-generated constructor stub
	}


}