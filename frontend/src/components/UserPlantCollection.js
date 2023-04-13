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
    const PLANTS_PER_LINE = 6;

    if(user.allPlants.length === 0){
      return(
        <p className="emptyCart"> Your cart is currently empty. </p>
        );
    }else{
    return (
        <>
    {user.allPlants.map((plant, index) => (
      <React.Fragment key={plant.id}>
        <li className="usersCollection">
           {index + 1}. {plant.name}&nbsp;
          <UserRemovePlant user={user} plant={plant} />
          &nbsp;|&nbsp;
        </li>
        {index % PLANTS_PER_LINE === PLANTS_PER_LINE - 1 && (
          <br key={`br-${plant.id}`} />
        )}
      </React.Fragment>
    ))}
    <br /><br />
    </>

    );
    }
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




