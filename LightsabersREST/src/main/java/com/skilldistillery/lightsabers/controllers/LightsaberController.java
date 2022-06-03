package com.skilldistillery.lightsabers.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.lightsabers.entities.Lightsaber;
import com.skilldistillery.lightsabers.services.LightsaberService;

@RequestMapping("api")
@RestController
public class LightsaberController {

	@Autowired
	private LightsaberService ls;

	@GetMapping("lightsabers")
	public List<Lightsaber> index() {
		return ls.index();
	}
}
