package com.HydroHomies.PlantCalendar.controllers;

import com.HydroHomies.PlantCalendar.entities.Plant;
import com.HydroHomies.PlantCalendar.entities.User;
import com.HydroHomies.PlantCalendar.repositories.PlantRepository;
import com.HydroHomies.PlantCalendar.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@CrossOrigin
@RequestMapping(value="/api")
public class UserController {
    final UserRepository userRepository;
    final PlantRepository plantRepository;

    public UserController(@Autowired UserRepository userRepository,
                          @Autowired PlantRepository plantRepository) {
        this.userRepository = userRepository;
        this.plantRepository = plantRepository;
    }


    @GetMapping("/users")
    public Iterable<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) throws Exception {
        return userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
    }

    @GetMapping("/users/{username}/plantCollection")
    public Collection<Plant> getUserPlantCollection(@PathVariable String username) throws Exception {
        return userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username))
                .getAllPlants();
    }

    @PostMapping("/users")
    public User postUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/users/{username}/plantCollection/{plant_id}")
    public void addPlantToUser(@PathVariable String username, @PathVariable Long plant_id) throws Exception {
       User user = userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
       user.addPlant(plantRepository.findById(plant_id).orElseThrow(() -> new Exception("Plant id not found: " + plant_id)));

       userRepository.save(user);

    }

    @PutMapping("/users/{username}/plantCollection")
    public void addNewPlantToUser(@PathVariable String username, @RequestBody Plant plant) throws Exception {
        User user = userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
        user.addPlant(plant);

        userRepository.save(user);

    }

    @DeleteMapping("/users/{username}/plantCollection/{plant_id}")
    public void deletePlantToUser(@PathVariable String username, @PathVariable Long plant_id) throws Exception {
        User user = userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
        user.removePlant(plant_id);

        userRepository.save(user);
    }


}
