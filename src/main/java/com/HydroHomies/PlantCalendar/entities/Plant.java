package com.HydroHomies.PlantCalendar.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Plant {
    public Plant () {}


    @Id
    @GeneratedValue
    private long id;


    private String name;

    private int waterPerWeek;

    private String waterAmount;

    private String lightLevel;

    private boolean petFriendly;

    private String notes;

    private String imgURL;

    public Plant(String name, int waterPerWeek, String waterAmount, String lightLevel, boolean petFriendly, String imgURL) {
        this.name = name;
        this.waterPerWeek = waterPerWeek;
        this.waterAmount = waterAmount;
        this.lightLevel = lightLevel;
        this.petFriendly = petFriendly;
        this.imgURL = imgURL;
    }

    public void setNotes(final String notes){
        this.notes = notes;
    }
    public void setId (final long id){
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getWaterPerWeek() {
        return waterPerWeek;
    }

    public String getWaterAmount() {
        return waterAmount;
    }

    public String getLightLevel() {
        return lightLevel;
    }

    public boolean isPetFriendly() {
        return petFriendly;
    }

    public String getNotes() {
        return notes;
    }

    public String getImgURL() {
        return imgURL;
    }

    private void setSucculentPlant() {
        this.name = "Succulent";
        this.waterPerWeek = 1;
        this.waterAmount = "Low";
        this.lightLevel = "High";
        this.petFriendly = true;
        this.imgURL = "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_succ_portulacaria_elephantbush_2-1674256776699.jpg?v=1674256778";
    }


}
