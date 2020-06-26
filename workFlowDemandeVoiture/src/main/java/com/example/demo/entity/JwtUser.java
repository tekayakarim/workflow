package com.example.demo.entity;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;



@Entity
public class JwtUser {
   
    @Id
    @GeneratedValue
    private long id;

    private String userName;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<JwtRole> roles = new HashSet<>();
    private String cin; 
    private String nom;
    private String prenom;
    private String email;
    
 private String password;


public JwtUser(String userName,
		String cin, String nom, String prenom,
			 String password) {
		super();
		this.userName = userName;
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.password = password;
	}
public JwtUser() {
	
}

	public JwtUser( String userName, Set<JwtRole> roles, String cin, String nom, String prenom,
		 String password) {
	super();
	this.userName = userName;
	this.roles = roles;
	this.cin = cin;
	this.nom = nom;
	this.prenom = prenom;
	this.password = password;
}
	
	public JwtUser( String userName, Set<JwtRole> roles, String cin, String nom, String prenom,
			String email, String password) {
		super();
		this.userName = userName;
		this.roles = roles;
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}


	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public void setUserName(String userName) {
        this.userName = userName;
    }


	public void setId(long id) {
        this.id = id;
    }


    public String getUserName() {
        return userName;
    }

    public long getId() {
        return id;
    }


	public Set<JwtRole> getRoles() {
		return roles;
	}
	public void setRoles(Set<JwtRole> roles) {
		this.roles = roles;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "JwtUser [id=" + id + ", userName=" + userName + ", roles=" + roles + ", cin=" + cin + ", nom=" + nom
				+ ", prenom=" + prenom + ", password=" + password + "]";
	}
    
}
