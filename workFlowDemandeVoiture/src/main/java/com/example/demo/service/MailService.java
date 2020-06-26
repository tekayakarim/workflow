package com.example.demo.service;

import org.springframework.mail.javamail.JavaMailSender;

import com.example.demo.model.MailModel;

public interface MailService {
JavaMailSender getJavaMailSender(String username,String password);
String sendSimpleMessage(MailModel mail);
}
