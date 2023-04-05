import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";
import UserPlantCollection from "./UserPlantCollection";

export default function Plant({ user }) {
    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [filterText, setFilterText] = useState('');


    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);


    return (
        <div>
            {/* Table that displays the user's added plants*/}
            <table>
                <thead>
                    <tr>
                        <th>{user.username}'s Plant Collection:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                     <UserPlantCollection user = {user} />
                </tr>
                </tbody>
            </table>

            {/* Allows the user to download their ICS watering schedule*/}
            <CreateICS user={user} />

            {/* Allows the user search for any given plant*/}
            <SearchBar filterText = {filterText} filterTextChange = {setFilterText}/>

            {/* Displays all available plants*/}
            <table>
                <thead>
                </thead>
                <tbody>
                <ListPlants plants = {plants} user = {user} filterText = {filterText}/>
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

function removePlant(user, plant) {
    fetch(
        "http://localhost:8080/api/users/" +
        user.username +
        "/plantCollection/" +
        plant.id,
        { method: "DELETE", cache: "default" }
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

function SearchBar({filterText,filterTextChange}){
      return (
        <form>
          <input
            type="text"
            value={filterText} placeholder="Search..."
            onChange={(e) => filterTextChange(e.target.value)} />
        </form>
      );
}

function ListPlants({plants, user, filterText}) {
      const rows = [];

      plants.forEach((plant) => {
        if (
          plant.name.toLowerCase().indexOf(
            filterText.toLowerCase()
          ) === -1
        ) {
          return;
        }
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
                <h4>{plant.name}</h4>
                <div className="img-container">
                    <img src={plant.imgURL} id={"plantImage_"+plant.id} />
                    <div className="plant-info">
                        <p>Watering Schedule: {parseWateringSchedule(plant.wateringSchedule)}</p>
                        <p>Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}</p>
                        <p>Water Amount: {plant.waterAmount}</p>
                    </div>
                </div>
                <button class= "button" onClick={() => addPlant(user, plant)}>Add Plant</button>
            </td>
            ))}
            </tr>
 )))};







