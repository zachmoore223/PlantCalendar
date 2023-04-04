import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";
import PlantInfo from "./PlantInfo";

export default function Plant({ user }) {
    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [expandedPlantId, setExpandedPlantId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);

    const listPlants1 = plants
        .filter((plant) => plant.id <= 5)
        .map((plant) => (
            <td key={plant.id}>
                <h4>{plant.name}</h4>
                <img src={plant.imgURL} id="plantImages" />
                <br />
                <button onClick={() => addPlant(user, plant)}>Add Plant</button>
                <button onClick={() => setExpandedPlantId(plant.id)}>Plant Info</button>
                {expandedPlantId === plant.id && (
                    <div className="plant-details">
                        <p>Watering Schedule: {plant.wateringSchedule}</p>
                        <p>
                            Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}
                        </p>
                        <p>Water Amount: {plant.waterAmount}</p>
                    </div>
                )}
            </td>
        ));

    const listPlants2 = plants
        .filter((plant) => plant.id > 5)
        .map((plant) => (
            <td key={plant.id}>
                <h4>{plant.name}</h4>
                <img src={plant.imgURL} id="plantImages" />
                <br />
                <button onClick={() => addPlant(user, plant)}>Add Plant</button>
                <button onClick={() => setExpandedPlantId(plant.id)}>Plant Info</button>
                {expandedPlantId === plant.id && (
                    <div className="plant-details">
                        <p>Watering Schedule: {plant.wateringSchedule}</p>
                        <p>
                            Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}
                        </p>
                        <p>Water Amount: {plant.waterAmount}</p>
                    </div>
                )}
            </td>
        ));

    return (
        <div>
            {selectedPlant && (
                <PlantInfo
                    plant={selectedPlant}
                    onClose={() => setSelectedPlant(null)}
                />
            )}

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

