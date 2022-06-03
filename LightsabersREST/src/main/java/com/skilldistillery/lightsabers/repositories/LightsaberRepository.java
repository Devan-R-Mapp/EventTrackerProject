package com.skilldistillery.lightsabers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.lightsabers.entities.Lightsaber;

public interface LightsaberRepository extends JpaRepository<Lightsaber, Integer> {

}
