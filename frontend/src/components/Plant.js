import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";
import UserPlantCollection from "./UserPlantCollection";
import PlantRemovePlant from "./PlantRemovePlant";
import OverwaterInfo from "./OverwaterInfo";
import WateringDay from "./WateringDay";
import PlantFilter from "./PlantFilter";

export default function Plant({ user }) {
    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [filterText, setFilterText] = useState('');
    const [isPetFriendly, setIsPetFriendly] = useState(false);
    const [filterLight, setFilterLight] = useState('All');
    const [filterWater, setFilterWater] = useState('All');


    useEffect(() => {
        fetch("http://localhost:8080/api/plants")
            .then((res) => res.json())
            .then((response) => setPlants(response));
    }, [user]);

    return (
        <div>
            {/* Table that displays the user's added plants*/}
            <h2 className="currentPlantCart">Current Plant Cart:</h2>

            <ul className ="usersCollection" key="ulPlant">
            <UserPlantCollection user = {user} />
            </ul>

            <WateringDay />

            {/* Allows the user to download their ICS watering schedule*/}
            <CreateICS user={user} />
            <br />

            {/*setting for user to filter through plants*/}
            <PlantFilter filterText = {filterText} setFilterText = {setFilterText}
            setFilterLight = {setFilterLight} setFilterWater = {setFilterWater}
             isPetFriendly = {isPetFriendly} setIsPetFriendly = {setIsPetFriendly} />

            {/* Displays all available plants*/}
            <table>
                <thead>
                </thead>
                <tbody>
                <ListPlants plants = {plants} user = {user} filterText = {filterText}
                isPetFriendly = {isPetFriendly} filterLight = {filterLight} filterWater = {filterWater} />
                </tbody>
            </table>

            <OverwaterInfo userPlants={user.allPlants} />

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
            if (interval === 1) {
                return 'Water once a week';
            } else if (interval === 2) {
                return 'Water once every two week';
            } else {
                return `Water every ${interval} weeks`;
            }
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

function ListPlants({plants, user, filterText, isPetFriendly, filterLight, filterWater}) {
      const rows = [];
        const [buttonText, setButtonText] = useState('');
      plants.forEach((plant) => {
        if (
          plant.name.toLowerCase().indexOf(
            filterText.toLowerCase()
          ) === -1
        ) {
          return;
        }
        if (isPetFriendly && !plant.petFriendly) {
          return;
        }
        if (filterLight === 'Low' && plant.lightLevel !== 'Low') {
          return;
        }
        if (filterLight === 'Medium' && plant.lightLevel !== 'Medium') {
          return;
        }
        if (filterLight === 'High' && plant.lightLevel !== 'High') {
          return;
        }
        if (filterWater === 'Low' && plant.waterAmount !== 'Low') {
          return;
        }
        if (filterWater === 'Medium' && plant.waterAmount !== 'Medium') {
          return;
        }
        if (filterWater === 'High' && plant.waterAmount !== 'High') {
          return;
        }


        rows.push(plant);
        });

        if(rows.length === 0){
            return(
            <tr>
            <td className="noPlant"> No plants found :( </td>
            </tr>
            );
        }

        const chunk = (arr, size) =>
            Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
               arr.slice(i * size, i * size + size)
        );

        const results = chunk(rows, 5);
        return(
        results
        .map((array, index) => (

            <tr key = {"row_"+index+1}>
            {array.map((plant) => (

            <td className="plant-container" key = {"plantContainer_"+plant.id}>
                <h4>{plant.name}</h4>
                <div className="img-container">
                    <img src={plant.imgURL} id={"plantImage_"+plant.id} />
                    <div className="plant-info">
                        <p>Watering Schedule: {parseWateringSchedule(plant.wateringSchedule)}</p>
                        <p>Pet Friendly? {plant.petFriendly ? 'Yes' : 'No'}</p>
                        <p>Water Amount: {plant.waterAmount}</p>
                        <p>Light Amount: {plant.lightLevel}</p>
                    </div>
                </div>

                <button className= "button"
                className={user.allPlants.some(p => p.id === plant.id) ? "clickedButton" : "button"}
                onClick={
                () => {addPlant(user, plant);
                        setButtonText("Plant Added");}
                }>
                 {user.allPlants.some(p => p.id === plant.id) ? "Plant Added" : "Add Plant"}
                 </button>
                &nbsp;
                 {user.allPlants.some(p => p.id === plant.id) ? <PlantRemovePlant user={user} plant={plant} /> : null}

            </td>

            ))}
            </tr>

 )))};








