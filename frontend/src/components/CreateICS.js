import React from "react";
import User from "./User";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS({user}) {


function getCollection() {
const ics = require('ics')
const plantCollection = [];
    user.allPlants.map((plant) =>
    plantCollection.push(
    {
    start: [2023, 1, 1, 12, 0],
    title: plant.name,
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
      <button onClick={getCollection}>Download Watering Schedule</button>
    </div>
  );
}