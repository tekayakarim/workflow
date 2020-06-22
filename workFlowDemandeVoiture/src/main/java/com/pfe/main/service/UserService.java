package com.pfe.main.service;

import java.util.List;

import com.pfe.main.entity.JwtUser;

public interface UserService {
List<JwtUser> listerAllUsers();
String deleteUser(long id);
JwtUser getUserById(long id);
}
