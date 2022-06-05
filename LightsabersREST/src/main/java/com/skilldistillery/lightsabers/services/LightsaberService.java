package com.skilldistillery.lightsabers.services;

import java.util.List;

import com.skilldistillery.lightsabers.entities.Lightsaber;

public interface LightsaberService {
	List<Lightsaber> index();

	boolean deleteLightsaber(int id);

	Lightsaber updateLightsaber(Lightsaber lightsaber, Integer id);

	Lightsaber createLightsaber(Lightsaber lightsaber);

	Lightsaber findLightsaberbyId(int lightsaberId);
}
