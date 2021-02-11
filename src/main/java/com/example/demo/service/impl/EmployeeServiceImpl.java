package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	EmployeeRepository empRepo;

	@Override
	public Employee createEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return empRepo.save(employee);
	}

	@Override
	public Employee updateEmplyoee(Employee employee) {
		// TODO Auto-generated method stub
		return empRepo.save(employee);
	}

	@Override
	public void deleteEmp(Employee employee) {
		// TODO Auto-generated method stub
		empRepo.delete(employee);
	}

	@Override
	public Employee findByEmp(long id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).orElse(null);
	}

	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	@Override
	public Employee findByFirstName(String firstName) {
		// TODO Auto-generated method stub
		return empRepo.findByFirstName(firstName);
	}

	@Override
	public Employee findByCode(String code) {
		// TODO Auto-generated method stub
		return empRepo.findByEmployeeCode(code);
	}

}
