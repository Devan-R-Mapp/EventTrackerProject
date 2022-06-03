package com.skilldistillery.lightsabers.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LightsaberTest {

	
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Lightsaber ls;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("LightsabersJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		ls = em.find(Lightsaber.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		ls = null;

	}
	@Test
	void test_owner() {
		assertEquals("Obi-Wan Kenobi", ls.getOwner());
	}

}
