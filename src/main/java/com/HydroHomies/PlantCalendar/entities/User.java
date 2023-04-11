package com.HydroHomies.PlantCalendar.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Entity(name="MyUsers")
public class User {

    @Id
    private String username;

    private String password;

    @ManyToMany()
    @JoinTable()
    private Map<Long, Plant> userPlants = new HashMap<>();

    public User () {
    }

    // Constructor that initializes the username and password of the user.
    public User (String username, String password) {
        this.username = username;
        this.password = password;
    }

    // This method returns a collection of all plants associated with this user.
    public Collection<Plant> getAllPlants() {
        return userPlants.values();
    }

    // This method adds a new plant to the user's collection.
    public void addPlant(Plant plant) {
        userPlants.put(plant.getId(), plant);
    }

    // This method removes a plant with the given id from the user's collection.
    public void removePlant(Long id) {
        userPlants.remove(id);
    }

    // This method gets the username of the user.
    public String getUsername() {
        return username;
    }

    // This method gets the password of the user.
    public String getPassword() {
        return password;
    }

    // This method gets the plant with the given id from the user's collection.
    public Plant getPlant (Long id) {
        return userPlants.get(id);
    }

}
