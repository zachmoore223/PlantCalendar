package com.HydroHomies.PlantCalendar.repositories;

import com.HydroHomies.PlantCalendar.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <User, String> {
}
