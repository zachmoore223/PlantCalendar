import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";

export default function Plant({ user }) {
    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);

    const listPlants1 = plants
        .filter((plant) => plant.id <= 5)
        .map((plant) => (
            <td key={plant.id} className="plant-container">
                <h4>{plant.name}</h4>
                <div className="img-container">
                    <img src={plant.imgURL} id="plantImages" />
                    <div className="plant-info">
                        <p>Watering Schedule: {parseWateringSchedule(plant.wateringSchedule)}</p>
                        <p>Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}</p>
                        <p>Water Amount: {plant.waterAmount}</p>
                    </div>
                </div>
                <button onClick={() => addPlant(user, plant)}>Add Plant</button>
            </td>
        ));

    const listPlants2 = plants
        .filter((plant) => plant.id > 5)
        .map((plant) => (
            <td key={plant.id} className="plant-container">
                <h4>{plant.name}</h4>
                <div className="img-container">
                    <img src={plant.imgURL} id="plantImages" />
                    <div className="plant-info">
                        <p>Watering Schedule: {parseWateringSchedule(plant.wateringSchedule)}</p>
                        <p>Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}</p>
                        <p>Water Amount: {plant.waterAmount}</p>
                    </div>
                </div>
                <button onClick={() => addPlant(user, plant)}>Add Plant</button>
            </td>
        ));

    return (
        <div>

            <table>
                <thead>
                <tr><th>{user.username}'s cart:</th></tr>
                </thead>
                <tbody>
                <tr><PlantCollection user = {user}/></tr>
                </tbody>
            </table>

            <CreateICS user={user} />

            <table>
                <thead>
                </thead>
                <tbody>
                <tr>{listPlants1}</tr>
                <tr>{listPlants2}</tr>
                </tbody>
            </table>
        </div>
    );
}

function addPlant(user, plant) {
    fetch(
        "http://localhost:8080/api/users/" +
        user.username +
        "/plantCollection/" +
        plant.id,
        { method: "PUT", cache: "default" }
    );
}

function PlantCollection({ user }) {
    return (
        user.allPlants.map((plant) => (
            <td key={plant.id}>
                <p>{plant.name} &nbsp;| &nbsp; </p>
            </td>
        ))
    );
}

function parseWateringSchedule(schedule) {
    const regex = /FREQ=(\w+);INTERVAL=(\d+)/;
    const match = schedule.match(regex);

    if (match) {
        const frequency = match[1].toLowerCase();
        const interval = parseInt(match[2], 10);

        if (frequency === 'weekly') {
            return `Water every ${interval} week${interval > 1 ? 's' : ''}`;
        }
        // Add more cases for different frequencies (e.g., 'daily', 'monthly') if needed.
    }

    return 'Unknown watering schedule';
}

