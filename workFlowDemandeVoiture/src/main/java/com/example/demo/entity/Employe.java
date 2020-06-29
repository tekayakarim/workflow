package com.example.demo.entity;

import javax.persistence.Entity;

@Entity
public class Employe extends JwtUser{

	private String chefHierarchiqueCin;
	
	private String CNRPS;


	public String getCNRPS() {
		return CNRPS;
	}
	public void setCNRPS(String cNRPS) {
		CNRPS = cNRPS;
	}
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
	@Override
	public String toString() {
		return super.toString()+" Employe [chefHierarchiqueCin=" + chefHierarchiqueCin + ", CNRPS=" + CNRPS + "]";
	}


	
}
