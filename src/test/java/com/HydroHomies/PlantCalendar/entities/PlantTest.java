package com.HydroHomies.PlantCalendar.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlantTest {

    @Test
    public void testEntity() {
        Plant test = new Plant("Test", 1, "Low", "High", true, "url");
        assertEquals("Test", test.getName());
        assertEquals(1, test.getWaterPerWeek());
        assertEquals("Low", test.getWaterAmount());
        assertEquals("High", test.getLightLevel());
        assertEquals(true, test.isPetFriendly());
        assertEquals("url", test.getImgURL());
    }

}