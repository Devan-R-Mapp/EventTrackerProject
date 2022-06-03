package com.skilldistillery.lightsabers.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lightsabers.entities.Lightsaber;
import com.skilldistillery.lightsabers.repositories.LightsaberRepository;

@Service
public class LightsaberServiceImpl implements LightsaberService {

	@Autowired
	private LightsaberRepository repo;
	
	
	@Override
	public List<Lightsaber> index() {
		
		return repo.findAll();
	}

}
