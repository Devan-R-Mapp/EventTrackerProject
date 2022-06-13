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
	private String alignment;
	private boolean destroyed;
	private Integer battles;
	private Integer wins;
	
	
	
	
	@Override
	public String toString() {
		return "Lightsaber [id=" + id + ", owner=" + owner + ", color=" + color + ", length=" + length + ", alignment="
				+ alignment + ", destroyed=" + destroyed + ", battles=" + battles + ", wins=" + wins + "]";
	}
	public Lightsaber(int id, String owner, String color, Integer length, String alignment, boolean destroyed,
			Integer battles, Integer wins) {
		super();
		this.id = id;
		this.owner = owner;
		this.color = color;
		this.length = length;
		this.alignment = alignment;
		this.destroyed = destroyed;
		this.battles = battles;
		this.wins = wins;
	}
	public Lightsaber() {
		super();
	}
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
		return alignment;
	}
	public void setAlignment(String alignment) {
		this.alignment = alignment;
	}
	public boolean isDestroyed() {
		return destroyed;
	}
	public void setDestroyed(boolean destroyed) {
		this.destroyed = destroyed;
	}
	public int getBattles() {
		return battles;
	}
	public void setBattles(Integer battles) {
		this.battles = battles;
	}
	public int getWins() {
		return wins;
	}
	public void setWins(Integer wins) {
		this.wins = wins;
	}
	
	

	
}
