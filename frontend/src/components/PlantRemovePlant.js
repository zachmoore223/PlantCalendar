import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";


export default function RemovePlant({ user , plant}) {
const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);

return (

    <button  key={"usersButton_"+plant.id} className= "removeButton" onClick={() => removePlant(user, plant)}>
        Remove
    </button>

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




