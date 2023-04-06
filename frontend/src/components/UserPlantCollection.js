import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";
import UserRemovePlant from "./UserRemovePlant";

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
    var count = 1;

    return (
        user.allPlants.map((plant) => (
        <ul className ="usersCollection" key={"ulPlant_"+plant.id}>
                <li className ="usersCollection" key={"collectionText_"+plant.id}>{count++}. {plant.name} &nbsp;

                 <UserRemovePlant user={user} plant={plant} />

                    &nbsp;| &nbsp;
                </li>
                 {count % 7 == 0 ? <br /> : null}
        </ul>
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




