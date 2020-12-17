package com.spc.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.spc.model.Person;


public class PersonDao extends JdbcDaoSupport{
       public String selectAll(){
    	   return "test";
       }
       
       public List getPerson(final Person person) {  
           String sql = "select * from mvc_person ";
           NamedParameterJdbcTemplate  template = new NamedParameterJdbcTemplate(this.getDataSource());			
   		   SqlParameterSource paramSource = new BeanPropertySqlParameterSource(person);
   		   return template.queryForList(sql, paramSource);   
       }  
}
