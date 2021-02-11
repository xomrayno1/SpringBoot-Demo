package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{

	
	@Override
	List<Employee> findAll();
	
	Employee findByFirstName(String firstName);
	
	Employee findByEmployeeCode(String code);
	
}
