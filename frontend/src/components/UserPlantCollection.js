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

   const rows = [];

   user.allPlants.forEach((plant) => {
            rows.push(plant);
  });

   const chunk = (arr, size) =>
   Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
                   arr.slice(i * size, i * size + size)
   );

   const results = chunk(rows, 5);


   return(
            results
            .map((array, index) => (
                <tr key = {index+1}>
                    {array.map((plant) => (
                        <td className="plant-container" key = {plant.id}>
                            <p>
                                {plant.name} &nbsp;
                                <button class= "xButton" onClick={() => removePlant(user, plant)}>
                                X
                                </button>
                                &nbsp;| &nbsp;
                            </p>
                        </td>
                ))}
                </tr>
)))};


function removePlant(user, plant) {
    fetch(
        "http://localhost:8080/api/users/" +
        user.username +
        "/plantCollection/" +
        plant.id,
        { method: "DELETE", cache: "default" }
    );
}




