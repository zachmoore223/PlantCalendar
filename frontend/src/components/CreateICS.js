import React from "react";
import User from "./User";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS({user}) {
const ics = require('ics')

const { error, value } = ics.createEvents([
  {
    title: 'Lunch',
    start: [2018, 1, 15, 12, 15],
    duration: { minutes: 45 }
  },
  {
    title: 'Dinner',
    start: [2018, 1, 15, 12, 15],
    duration: { hours: 1, minutes: 30 }
  }
])

if (error) {
  console.log(error)
  return
}

console.log(value);

  const handleSave = () => {
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "event-schedule.ics");
  };

  return (
    <div>
      <button onClick={handleSave}>Download Watering Schedule</button>
    </div>
  );
}