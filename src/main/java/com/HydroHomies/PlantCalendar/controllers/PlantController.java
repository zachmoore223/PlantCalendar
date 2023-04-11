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

    // This method uses the GET method to retrieve all plants stored in the database.
    @GetMapping("/plants")
    public Iterable<Plant> getPlants() {
        // Call the findAll() method of the plantRepository to get all plants in the database.
        return plantRepository.findAll();
    }

    // This method uses the GET method to retrieve a specific plant from the database using its id.
    @GetMapping("/plants/{plant_id}")
    public Plant getPlant(@PathVariable long plant_id) throws Exception {
        // Call the findById() method of the plantRepository to retrieve the plant with the given plant_id.
        // If the plant doesn't exist, throw a new Exception with a custom message.
        return plantRepository.findById(plant_id).orElseThrow(() -> new Exception("Plant id not found: " + plant_id));
    }

    // This method uses the POST method to add a new plant to the database.
    @PostMapping("/plants")
    public Plant addPlant(@RequestBody Plant plant) {
        // Call the save() method of the plantRepository to add the new plant to the database and return it.
        return plantRepository.save(plant);
    }

    @PutMapping("/addRR/{newRR}")
    public void addRR(@PathVariable String newRR){
        plantRepository.findAll().forEach(plant -> {plant.changeWateringSchedule(newRR);
        plantRepository.save(plant);});
    }
}

//        Iterable<Plant> allPlants = plantRepository.findAll();
//        allPlants.forEach(plant -> {plant.changeWateringSchedule(newRR);});
//        plantRepository.saveAll(allPlants);