package com.HydroHomies.PlantCalendar.entities;

import jakarta.persistence.*;

@Entity
public class Plant {
    public Plant() {
    }

    @Id
    @GeneratedValue
    @Column
    private long id;
    @Column
    private String name;
    @Column
    private String wateringSchedule;
    @Column
    private String waterAmount;
    @Column
    private String lightLevel;
    @Column
    private boolean petFriendly;
    @Column
    private String imgURL;

    public Plant(String name, String wateringSchedule, String waterAmount, String lightLevel, boolean petFriendly, String imgURL) {
        this.name = name;
        this.wateringSchedule = wateringSchedule;
        this.waterAmount = waterAmount;
        this.lightLevel = lightLevel;
        this.petFriendly = petFriendly;
        this.imgURL = imgURL;
    }

    // This method sets the ID of the plant.
    public void setId(final long id) {
        this.id = id;
    }

    // this method sets the watering schedule for the plant.
    public void changeWateringSchedule(String newRR) {
        String newSchedule = this.wateringSchedule.substring(0,this.wateringSchedule.length()-2);
        newSchedule = newSchedule + newRR;
        this.wateringSchedule = newSchedule;
    }

    // This method gets the ID of the plant.
    public long getId() {
        return id;
    }

    // This method gets the name of the plant.
    public String getName() {
        return name;
    }

    // This method gets the watering schedule of the plant.
    public String getWateringSchedule() {
        return wateringSchedule;
    }

    // This method gets the water amount of the plant.
    public String getWaterAmount() {
        return waterAmount;
    }

    // This method gets the light level of the plant.
    public String getLightLevel() {
        return lightLevel;
    }

    // This method checks whether the plant is pet-friendly or not.
    public boolean isPetFriendly() {
        return petFriendly;
    }

    // This method gets the image URL of the plant.
    public String getImgURL() {
        return imgURL;
    }


}
