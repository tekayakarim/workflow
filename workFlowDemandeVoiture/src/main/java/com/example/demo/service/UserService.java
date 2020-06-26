package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.JwtUser;

public interface UserService {
List<JwtUser> listerAllUsers();
String deleteUser(long id);
JwtUser getUserById(long id);
}
