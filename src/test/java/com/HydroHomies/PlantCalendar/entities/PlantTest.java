package com.HydroHomies.PlantCalendar.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlantTest {

    @Test
    public void testEntity() {
        Plant test = new Plant("Test", "FREQ=DAILY;INTERVAL=2;BYDAY=SU", "Low", "High", true, "url");
        assertEquals("Test", test.getName());
        assertEquals("FREQ=DAILY;INTERVAL=2;BYDAY=SU", test.getWateringSchedule());
        assertEquals("Low", test.getWaterAmount());
        assertEquals("High", test.getLightLevel());
        assertEquals(true, test.isPetFriendly());
        assertEquals("url", test.getImgURL());
    }

    @Test
    public void testChange() {
        Plant test = new Plant("Test", "FREQ=DAILY;INTERVAL=2;BYDAY=SU", "Low", "High", true, "url");
        test.changeWateringSchedule("MO");
        assertEquals("FREQ=DAILY;INTERVAL=2;BYDAY=MO", test.getWateringSchedule());
    }
}