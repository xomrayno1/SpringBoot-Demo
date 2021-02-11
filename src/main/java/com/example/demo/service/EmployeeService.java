package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;

public interface EmployeeService {
	
	Employee createEmployee(Employee employee);
	
	Employee updateEmplyoee(Employee employee);
	
	void deleteEmp(Employee employee);
	
	Employee findByEmp(long id);
	
	List<Employee> findAll();
	
	Employee findByFirstName(String firstName);
	
	Employee findByCode(String code);

}
