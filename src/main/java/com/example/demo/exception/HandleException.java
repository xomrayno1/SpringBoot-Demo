package com.example.demo.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class HandleException  extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ErrorDetail> handleResourceNotFoundException(ResourceNotFoundException exception, WebRequest request){
		ErrorDetail errorDetail = new ErrorDetail(exception.getMsg(),new Date()
												,request.getDescription(false)
														 );
		return new ResponseEntity<ErrorDetail>(errorDetail,HttpStatus.NOT_FOUND);
	}
//	@Override
//	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
//			HttpHeaders headers, HttpStatus status, WebRequest request) {
//		 ErrorDetail errorDetail = new ErrorDetail("Validation failed",	
//				 		ex.getBindingResult().toString(),
//					 new Date());
//		 return new ResponseEntity<Object>(errorDetail,HttpStatus.INTERNAL_SERVER_ERROR);
//		//return super.handleMethodArgumentNotValid(ex, headers, status, request);
//	}
	
	
	

}
