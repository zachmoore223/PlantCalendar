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

    public void setId(final long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getWateringSchedule() {
        return wateringSchedule;
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

    public String getImgURL() {
        return imgURL;
    }

}
