package com.HydroHomies.PlantCalendar.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    public void testUser () {
        User test = new User("Jimbob", "test");
        Plant testPlant = new Plant("Test", "FREQ=DAILY;INTERVAL=2", "Low", "High", true, "url");
        test.addPlant(testPlant);
        assertEquals("Jimbob", test.getUsername());
        assertEquals("test", test.getPassword());
        assertEquals(1, test.getAllPlants().size());
        assertEquals("Test", test.getPlant(0L).getName());
    }
}