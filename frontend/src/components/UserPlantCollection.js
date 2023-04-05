import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";

export default function UserPlantCollection({ user }) {
const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);

    return (
        user.allPlants.map((plant) => (
            <td key={plant.id}>
                <p>{plant.name} &nbsp; <button class= "button" onClick={() => removePlant(user, plant)}>X</button> &nbsp;| &nbsp; </p>
            </td>
        ))
    );
}


function removePlant(user, plant) {
    fetch(
        "http://localhost:8080/api/users/" +
        user.username +
        "/plantCollection/" +
        plant.id,
        { method: "DELETE", cache: "default" }
    );
}




