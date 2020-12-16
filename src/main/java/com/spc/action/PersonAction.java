package com.spc.action;

import java.util.List;

import javax.annotation.Resource;

import org.codehaus.jackson.annotate.JsonAnyGetter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import com.spc.dao.PersonDao;
import com.spc.model.Person;
import com.spc.JsonUtil;

@Controller
@RequestMapping("/person")
public class PersonAction {
	public PersonDao getPersonDao() {
		return personDao;
	}

	public void setPersonDao(PersonDao personDao) {
		this.personDao = personDao;
	}
	


	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	@RequestMapping(value="/hello",method = RequestMethod.GET)  
    public String printWelcome(ModelMap model) {  
        model.addAttribute("message", "Spring 3 MVC Hello World"); 
        return "hello";  
    }  
	
	@Resource(name="personDao")
	private PersonDao personDao;
	
	private Person person;
	

	
	@RequestMapping(value="/addr",method = RequestMethod.GET)  
	public String getAddressList(ModelMap model) {
		    String pString = personDao.selectAll();
		    System.out.println(pString);
		    model.addAttribute("people", pString); 
		    return "person/list"; 
	} 
	
	@RequestMapping(value="/test",method = RequestMethod.GET)  
	public void test() { 
		    @SuppressWarnings("rawtypes")
			List list = personDao.getPerson(person);
		    //list2json(list);
		    System.out.println(list.get(0));
	} 
	
	

}
