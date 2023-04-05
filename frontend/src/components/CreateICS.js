import React from "react";
import User from "./User";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS({user}) {


function getCollection() {
const ics = require('ics')
const plantCollection = [];
var today = new Date();

    user.allPlants.map((plant) =>
    plantCollection.push(
    {
    start: [today.getFullYear(), today.getMonth()+1, today.getDate(), 12, 0],
    duration: {minutes: 30},
    title: plant.name,
    recurrenceRule: plant.wateringSchedule,
    description: 'Water Amount: '+ plant.waterAmount +
                  ', Light Level: '+ plant.lightLevel +
                  ', Pet Friendly: '+ plant.petFriendly,
    }
    ))

const { error, value } = ics.createEvents(plantCollection)

if (error) {
  console.log(error)
  return
}

console.log(value);

  const handleSave = () => {
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "event-schedule.ics");
  };
  handleSave();
 }

  return (
    <div>
      <button class= "button" onClick={getCollection}>Download Watering Schedule</button>
    </div>
  );
}