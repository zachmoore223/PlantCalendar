import { useState, useEffect } from "react";
import User from "./User";

export default function Plant({ user }) {
  const [plants, setPlants] = useState([]);
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
      </td>
    ));

  return (
    <div>
      <table>
        <tr>{listPlants1}</tr>
        <tr>{listPlants2}</tr>
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
