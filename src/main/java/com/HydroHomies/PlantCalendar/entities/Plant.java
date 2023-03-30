package com.HydroHomies.PlantCalendar.entities;

import jakarta.persistence.*;

import java.util.ArrayList;

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
    private int waterPerWeek;
    @Column
    private String waterAmount;
    @Column
    private String lightLevel;
    @Column
    private boolean petFriendly;
    @Column
    private String imgURL;

    private String notes = "";

    public Plant(String name, int waterPerWeek, String waterAmount, String lightLevel, boolean petFriendly, String imgURL) {
        this.name = name;
        this.waterPerWeek = waterPerWeek;
        this.waterAmount = waterAmount;
        this.lightLevel = lightLevel;
        this.petFriendly = petFriendly;
        this.imgURL = imgURL;
    }

    public void setNotes(final String notes) {
        this.notes = notes;
    }

    public void setId(final long id) {
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

}
