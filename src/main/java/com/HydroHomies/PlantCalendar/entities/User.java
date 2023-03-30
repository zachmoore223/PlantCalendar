package com.HydroHomies.PlantCalendar.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Entity(name="MyUsers")
public class User {

    @Id
    private String username;

    @ManyToMany()
    @JoinTable()
    private Map<Long, Plant> userPlants = new HashMap<>();

    public User () {
    }

    public User (String username) {
        this.username = username;
    }

    public Collection<Plant> getAllPlants() {
        return userPlants.values();
    }

    public void addPlant(Plant plant) {
        userPlants.put(plant.getId(), plant);
    }

    public void removePlant(Long id) {
        userPlants.remove(id);
    }

    public String getUsername() {
        return username;
    }

    public Plant getPlant (Long id) {
        return userPlants.get(id);
    }

}
