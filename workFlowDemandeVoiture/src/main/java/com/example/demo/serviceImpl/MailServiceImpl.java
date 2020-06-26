package com.example.demo.serviceImpl;

import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.demo.model.MailModel;
import com.example.demo.service.MailService;
@Service
public class MailServiceImpl implements MailService {
	


	@Override
	public JavaMailSender getJavaMailSender(String username,String password) {
	    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	    mailSender.setHost("smtp.gmail.com");
	    mailSender.setPort(587);
	     
	    mailSender.setUsername(username);
	    mailSender.setPassword(password);
	     
	    Properties props = mailSender.getJavaMailProperties();
	    props.put("mail.transport.protocol", "smtp");
	    props.put("mail.smtp.auth", "true");
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.debug", "true");
	     
	    return mailSender;
	}

	@Override
	public String sendSimpleMessage(MailModel mail) {
     /*   SimpleMailMessage message = new SimpleMailMessage(); 
        message.setTo(); 
        message.setSubject(); 
        message.setText();*/
		 try {
			JavaMailSender mailSender = getJavaMailSender(mail.getMyMail(),mail.getMyPassword());
			MimeMessage mimeMessage = getJavaMailSender(mail.getMyMail(),mail.getMyPassword()).createMimeMessage();
			mimeMessage.setContent(mail.getBody(), "text/html");
			
			MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
			helper.setText(mail.getBody(), true);
			helper.setTo(mail.getTo());
			helper.setSubject(mail.getSubject());

			mailSender.send(mimeMessage);
			return "sent";
		} catch (MailException e) {
		
			e.printStackTrace();
		} catch (MessagingException e) {
			
			e.printStackTrace();
		}
		 return "fail to send";
	}

}
