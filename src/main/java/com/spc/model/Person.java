package com.spc.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


public class Person implements RowMapper{ 
	  private int id; 
	  private String name; 
	  private String postcode; 
	  private String address; 

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

	  public String getPostcode() { 
	    return postcode; 
	  } 

	  public void setPostcode(String postcode) { 
	    this.postcode = postcode; 
	  } 

	  public String getAddress() { 
	    return address; 
	  } 

	  public void setAddress(String address) { 
	    this.address = address; 
	  }

	@Override
	public Object mapRow(ResultSet rs, int arg1) throws SQLException {
		Person person = new Person();
		person.setId(rs.getInt("id"));
		person.setName(rs.getString("name"));;
		person.setAddress(rs.getString("address"));
		person.setPostcode((rs.getString("postcode")));
		
		return person;
	 } 
	
	
} 