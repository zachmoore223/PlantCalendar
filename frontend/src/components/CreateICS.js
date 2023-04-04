import React from "react";
import User from "./User";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS({user}) {
const ics = require('ics')

const { error, value } = ics.createEvents([
  {
    title: 'Succulent',
    start: [2023, 1, 1, 12, 0],
    recurrenceRule: 'FREQ=DAILY;INTERVAL=2',
  },
  {
    title: 'Philodendron',
    start: [2023, 1, 1, 12, 0],
    recurrenceRule: 'FREQ=DAILY;INTERVAL=2',
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