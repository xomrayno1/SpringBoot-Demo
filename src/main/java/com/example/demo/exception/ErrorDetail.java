package com.example.demo.exception;

import java.util.Date;

public class ErrorDetail {
	private String message;
	private Date date;
	private String description;
	
	
	
	
	public ErrorDetail(String message, Date date, String description) {
		super();
		this.message = message;
		this.date = date;
		this.description = description;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	

}
