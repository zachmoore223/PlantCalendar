package com.HydroHomies.PlantCalendar.controllers;

import com.HydroHomies.PlantCalendar.entities.Plant;
import com.HydroHomies.PlantCalendar.repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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

}
