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

    // This method uses the GET method to retrieve all users stored in the database.
    @GetMapping("/users")
    public Iterable<User> getUsers(){
        // Call the findAll() method of the userRepository to get all users in the database.
        return userRepository.findAll();
    }

    // This method uses the GET method to retrieve a specific user from the database using their username.
    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) throws Exception {
        // Call the findById() method of the userRepository to retrieve the user with the given username.
        // If the user doesn't exist, throw a new Exception with a custom message.
        return userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
    }

    // This method uses the GET method to retrieve the plant collection of a specific user from the database using their username.
    @GetMapping("/users/{username}/plantCollection")
    public Collection<Plant> getUserPlantCollection(@PathVariable String username) throws Exception {
        // Call the findById() method of the userRepository to retrieve the user with the given username.
        // If the user doesn't exist, throw a new Exception with a custom message.
        return userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username))
                .getAllPlants();
    }

    // This method uses the POST method to add a new user to the database.
    @PostMapping("/users")
    public User postUser(@RequestBody User user) {
        // Call the save() method of the userRepository to add the new user to the database and return it.
        return userRepository.save(user);
    }

    // This method uses the PUT method to add a new plant to the collection of a specific user in the database using their username and the plant id.
    @PutMapping("/users/{username}/plantCollection/{plant_id}")
    public void addPlantToUser(@PathVariable String username, @PathVariable Long plant_id) throws Exception {
        // Call the findById() method of the userRepository to retrieve the user with the given username.
        // If the user doesn't exist, throw a new Exception with a custom message.
        User user = userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
        // Call the findById() method of the plantRepository to retrieve the plant with the given plant_id.
        // If the plant doesn't exist, throw a new Exception with a custom message.
        Plant plant = plantRepository.findById(plant_id).orElseThrow(() -> new Exception("Plant id not found: " + plant_id));
        // Call the addPlant() method of the user to add the new plant to their collection.
        user.addPlant(plant);
        // Call the save() method of the userRepository to update the user's data in the database.
        userRepository.save(user);
    }


    // This method uses the DELETE method to remove a specific plant from the collection of a specific user in the database using their username and the plant id.
    @DeleteMapping("/users/{username}/plantCollection/{plant_id}")
    public void deletePlantToUser(@PathVariable String username, @PathVariable Long plant_id) throws Exception {
        // Call the findById() method of the userRepository to retrieve the user with the given username.
        // If the user doesn't exist, throw a new Exception with a custom message.
        User user = userRepository.findById(username).orElseThrow(() -> new Exception("Username not found: " + username));
        // Call the removePlant() method of the user to remove the plant with the given plant_id from their collection.
        user.removePlant(plant_id);
        // Call the save() method of the userRepository to update the user's data in the database.
        userRepository.save(user);
    }
}
