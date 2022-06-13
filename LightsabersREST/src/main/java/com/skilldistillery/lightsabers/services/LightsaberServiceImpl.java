package com.skilldistillery.lightsabers.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Lightsaber findLightsaberbyId(int lightsaberId) {
		Lightsaber lightsaber = null;
		Optional<Lightsaber> op = repo.findById(lightsaberId);
		if (op.isPresent()) {
			lightsaber = op.get();
		}
		return lightsaber;
	}

	@Override
	public Lightsaber createLightsaber(Lightsaber lightsaber) {
		Lightsaber created = null;
		created = repo.saveAndFlush(lightsaber);
		return created;
	}

	@Override
	public Lightsaber updateLightsaber(Lightsaber lightsaber, Integer id) {
		Lightsaber updated = findLightsaberbyId(id);
		updated.setOwner(lightsaber.getOwner());
		updated.setColor(lightsaber.getColor());
		updated.setLength(lightsaber.getLength());
		updated.setAlignment(lightsaber.getAlignment());
		updated.setDestroyed(lightsaber.isDestroyed());
		updated.setBattles(lightsaber.getBattles());
		updated.setWins(lightsaber.getWins());
		
		return repo.saveAndFlush(updated);
	}

	@Override
	public boolean deleteLightsaber(int id) {
		boolean deleted = false;
		Lightsaber lightsaber = findLightsaberbyId(id);
		repo.delete(lightsaber);
		if (findLightsaberbyId(id) == null) {
			deleted = true;
		}
		return deleted;

	}
}
