package com.pfe.main.service;

import org.springframework.mail.javamail.JavaMailSender;

import com.pfe.main.model.MailModel;

public interface MailService {
JavaMailSender getJavaMailSender(String username,String password);
String sendSimpleMessage(MailModel mail);
}
