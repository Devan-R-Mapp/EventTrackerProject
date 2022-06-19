package com.skilldistillery.lightsabers.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.lightsabers.entities.Lightsaber;
import com.skilldistillery.lightsabers.services.LightsaberService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost" })
public class LightsaberController {

	@Autowired
	private LightsaberService ls;

	@GetMapping("lightsabers")
	public List<Lightsaber> index() {
		return ls.index();
	}

	@GetMapping("lightsabers/{id}")
	public Lightsaber showOne(@PathVariable Integer id, HttpServletResponse HSR) {
		Lightsaber runner = ls.findLightsaberbyId(id);
		if (runner == null) {
			HSR.setStatus(404);
		}
		return runner;
	}

	@PostMapping("lightsabers")
	public Lightsaber addLightsaber(@RequestBody Lightsaber lightsaber) {
		return ls.createLightsaber(lightsaber);
	}

	@PutMapping("lightsabers/{lightsaberId}")
	public Lightsaber updateLightsaber(@PathVariable Integer lightsaberId, @RequestBody Lightsaber lightsaber,
			HttpServletResponse res) {
		try {
			lightsaber = ls.updateLightsaber(lightsaber, lightsaberId);
			if (lightsaber == null) {
				res.setStatus(404);
				lightsaber = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
			lightsaber = null;
		}
		return lightsaber;

	}

	@DeleteMapping("lightsabers/{id}")
	public boolean delete(@PathVariable int id) {
		try {
			ls.deleteLightsaber(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
