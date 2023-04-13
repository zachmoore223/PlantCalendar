import React from "react";
import User from "./User";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS({ user }) {

    // This function generates an ICS file containing the watering schedules for all plants belonging to the given user.
    function getCollection() {
        // Import the 'ics' package for generating ICS files.
        const ics = require('ics');

        // Create an array to hold the plant collection and set the start time to the current date and time.
        const plantCollection = [];
        const today = new Date();

        // Loop through all plants in the user's collection and add them to the plant collection array.
        user.allPlants.map((plant) =>
            plantCollection.push({
                start: [today.getFullYear(), today.getMonth() + 1, today.getDate(), 12, 0],
                duration: { minutes: 30 },
                title: plant.name,
                recurrenceRule: plant.wateringSchedule,
                description: 'Water Amount: ' + plant.waterAmount +
                    ', Light Level: ' + plant.lightLevel +
                    ', Pet Friendly: ' + plant.petFriendly,
            })
        );

        // Use the 'ics' package to generate the ICS file.
        const { error, value } = ics.createEvents(plantCollection);

        // If an error occurred during ICS file creation, log the error and return from the function.
        if (error) {
            console.log(error)
            return;
        }

        console.log(value);

        // Create a blob containing the ICS file and download it as "event-schedule.ics".
        const handleSave = () => {
            const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "plant-schedule.ics");
        };
        handleSave();
    }

    return (
        <div>
            <button className="icsButton" onClick={getCollection}>Download Watering Schedule</button>
        </div>
    );
}