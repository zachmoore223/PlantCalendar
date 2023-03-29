package com.HydroHomies.PlantCalendar.repositories;

import com.HydroHomies.PlantCalendar.entities.Plant;
import org.springframework.data.repository.CrudRepository;

public interface PlantRepository extends CrudRepository<Plant, Long> {
}
