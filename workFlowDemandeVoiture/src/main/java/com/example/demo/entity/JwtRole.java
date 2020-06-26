package com.example.demo.entity;

import javax.persistence.*;

import com.example.demo.model.JwtERole;

@Entity
@Table(name = "roles")
public class JwtRole {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	private JwtERole name;

	public JwtRole() {

	}

	public JwtRole(JwtERole name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public JwtERole getName() {
		return name;
	}

	public void setName(JwtERole name) {
		this.name = name;
	}
}