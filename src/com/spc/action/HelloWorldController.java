package com.spc.action;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spc.dao.PersonDao;

@Controller
@RequestMapping("/user")
public class HelloWorldController {
	public PersonDao getPersonDao() {
		return personDao;
	}

	public void setPersonDao(PersonDao personDao) {
		this.personDao = personDao;
	}

	@RequestMapping(value="/hello",method = RequestMethod.GET)  
    public String printWelcome(ModelMap model) {  
        model.addAttribute("message", "Spring 3 MVC Hello World"); 
        return "hello";  
    }  
	
	private PersonDao personDao; 
	
	@RequestMapping(value="/addr",method = RequestMethod.GET)  
	public String getAddressList(ModelMap model) {
		    String pString = personDao.selectAll();
		    System.out.println(pString);
		    model.addAttribute("people", pString); 
		    return "person/list"; 
	} 
	
	@RequestMapping(value="/test",method = RequestMethod.GET)  
	public String test(Model model) { 
		    model.addAttribute("people", "aaaaaa"); 
		    return "person/list"; 
	} 

}
