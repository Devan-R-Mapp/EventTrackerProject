package com.skilldistillery.lightsabers.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Lightsaber {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String owner;
	private String color;
	private Integer length;
	private String Alignment;
	private boolean destroyed;
	
	
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Lightsaber other = (Lightsaber) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Lightsaber [id=" + id + ", owner=" + owner + ", color=" + color + ", Alignment=" + Alignment + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}

	public String getAlignment() {
		return Alignment;
	}

	public void setAlignment(String alignment) {
		Alignment = alignment;
	}

	public boolean isDestroyed() {
		return destroyed;
	}

	public void setDestroyed(boolean destroyed) {
		this.destroyed = destroyed;
	}


}
