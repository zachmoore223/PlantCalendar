package com.HydroHomies.PlantCalendar.controllers;

import com.HydroHomies.PlantCalendar.entities.Plant;
import com.HydroHomies.PlantCalendar.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api")
public class PlantController {

    final PlantRepository plantRepository;

    public PlantController(@Autowired PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    @GetMapping("/plants")
    public Iterable<Plant> getPlants() {
        return plantRepository.findAll();
    }

    @GetMapping("/plants/{plant_id}")
    public Plant getPlant(@PathVariable long plant_id) throws Exception {
        return plantRepository.findById(plant_id).orElseThrow(() -> new Exception("Plant id not found: " + plant_id));
    }

    /* curl -X POST http://localhost:8080/api/plants -H 'Content-Type: application/json' -d '{"name": "Test", "waterPerWeek": 1, "waterAmount": "Low",
    "lightLevel": "High", "petFriendly": true, "notes": "Test", "imgURL": "Test"}' */
    @PostMapping("/plants")
    public Plant addPlant(@RequestBody Plant plant) {
        return plantRepository.save(plant);
    }

}
