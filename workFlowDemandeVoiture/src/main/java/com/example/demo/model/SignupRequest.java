package com.example.demo.model;


 
public class SignupRequest {
 
    private String userName;
     
    private String role; 
    private String nom;
    private String prenom;
	
    private String password;

  private String cin;
   private String chefHierarchiqueCin;
   private String chefDAAFCin;
   private String email;
   
	public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

	public String getChefDAAFCin() {
	return chefDAAFCin;
}

public void setChefDAAFCin(String chefDAAFCin) {
	this.chefDAAFCin = chefDAAFCin;
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

	public String getUserName() {
        return userName;
    }
 
    public void setUserName(String username) {
        this.userName = username;
    }
 
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getChefHierarchiqueCin() {
		return chefHierarchiqueCin;
	}

	public void setChefHierarchiqueCin(String chefHierarchiqueCin) {
		this.chefHierarchiqueCin = chefHierarchiqueCin;
	}

	public SignupRequest() {
		super();
		
	}

	public SignupRequest(String userName, String role, String nom, String prenom,
			 String password,String cin, String email) {
		super();
		this.userName = userName;
		this.role = role;
		this.nom = nom;
		this.prenom = prenom;
		this.password = password;
		this.cin = cin;
		this.email = email;
	}


    

}
