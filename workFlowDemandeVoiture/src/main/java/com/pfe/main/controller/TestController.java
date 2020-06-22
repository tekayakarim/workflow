package com.pfe.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;*/
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.util.HtmlUtils;

import com.pfe.main.model.MailModel;
import com.pfe.main.service.MailService;

/*import net.javaguides.springboot.websocket.model.Greeting;
import net.javaguides.springboot.websocket.model.HelloMessage;*/

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/main")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
/*	@PreAuthorize("hasRole('EMPLOYE') or hasRole('CHEFPARK') or hasRole('ADMIN')"
			+ "or hasRole('CHEFHIERARCHIQUE') or hasRole('AGENTDAAF')")*/
	public String userAccess() {
		return "User Content.";
	}
 
	@GetMapping("/chef")
	@PreAuthorize("hasRole('CHEFPARK')")
	public String moderatorAccess() {
		return "Chef park Board.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
 /*   @MessageMapping("/try")
    @SendTo("/main/user")
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }*/
	@Autowired
	MailService mailService;
@PostMapping("sendMail")
public String send(@RequestBody MailModel mail ) {
return 	mailService.sendSimpleMessage(mail);
}
}
