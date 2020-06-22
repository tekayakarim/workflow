package com.pfe.main.entity;

import javax.persistence.Entity;

@Entity
public class Employe extends JwtUser{

	private String chefHierarchiqueCin;


	public String getChefHierarchiqueCin() {
		return chefHierarchiqueCin;
	}
	public void setChefHierarchiqueCin(String chefHierarchiqueCin) {
		this.chefHierarchiqueCin = chefHierarchiqueCin;
	}

	public Employe(String chefHierarchiqueCin) {
		super();
		this.chefHierarchiqueCin=chefHierarchiqueCin;
	}
	public Employe() {
		super();
		
	}


	
}
