package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	
	@GetMapping
	public ResponseEntity<List<Employee>> getAll(){
		List<Employee> employees = employeeService.findAll();
		if(employees.isEmpty()) {
			return new ResponseEntity<List<Employee>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Employee>>(employees,HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable("id") long id){
		Employee employee = employeeService.findByEmp(id);
		if(employee == null) {
			throw new ResourceNotFoundException("employee not found exception with id "+ id);
		}
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	@GetMapping("/firstName/{firstName}")
	public ResponseEntity<Employee> getByFirstName(@PathVariable("firstName") String firstName){
		Employee employee = employeeService.findByFirstName(firstName);
		if(employee == null) {
			throw new ResourceNotFoundException("employee not found exception with firstName "+ firstName);
		}
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	@PostMapping
	public ResponseEntity<Employee> creatEmp(@RequestBody Employee employeeRequest){
		Employee employee = employeeService.findByCode(employeeRequest.getEmployeeCode());
		if(employee != null) {
			return new ResponseEntity<Employee>(HttpStatus.CONFLICT);
		}
		employee = employeeService.createEmployee(employeeRequest);
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	@PutMapping
	public ResponseEntity<Employee> updateEmp(@RequestBody Employee employeeRequest){
		Employee employee = employeeService.findByEmp(employeeRequest.getId());
		if(employee == null) {
			throw new ResourceNotFoundException("employee not found exception with id "+ employeeRequest.getId());
		}
		if(employeeRequest.getEmployeeCode() != null) {
			employee.setEmployeeCode(employeeRequest.getEmployeeCode());
		}
		if(employeeRequest.getFirstName() != null) {
			employee.setFirstName(employeeRequest.getFirstName());
		}
		if(employeeRequest.getLastName() != null) {
			employee.setLastName(employeeRequest.getLastName());
		}
		employee = employeeService.updateEmplyoee(employee);
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteEmp(@PathVariable("id") long id){
		Employee employee = employeeService.findByEmp(id);
		if(employee == null) {
			throw new ResourceNotFoundException("employee not found exception with id "+ id);
		}
		employeeService.deleteEmp(employee);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
