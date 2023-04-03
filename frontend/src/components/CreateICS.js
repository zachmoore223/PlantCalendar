import React from "react";
import { createEvent } from "ics";
import { saveAs } from "file-saver";

export default function CreateICS() {
  // Set up event schedule details
  const event = {
    start: [2018, 5, 30, 6, 30],
    duration: { hours: 6, minutes: 30 },
    title: "Bolder Boulder",
    description: "Annual 10-kilometer run in Boulder, Colorado",
    location: "Folsom Field, University of Colorado (finish line)",
    url: "http://www.bolderboulder.com/",
    geo: { lat: 40.0095, lon: 105.2669 },
    categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
    status: "CONFIRMED",
    busyStatus: "BUSY",
    organizer: { name: "Admin", email: "Race@BolderBOULDER.com" },
    attendees: [
      {
        name: "Adam Gibbons",
        email: "adam@example.com",
        rsvp: true,
        partstat: "ACCEPTED",
        role: "REQ-PARTICIPANT"
      },
      {
        name: "Brittany Seaton",
        email: "brittany@example2.org",
        dir: "https://linkedin.com/in/brittanyseaton",
        role: "OPT-PARTICIPANT"
      }
    ]
  };

  const handleSave = () => {
    createEvent(event, (error, value) => {
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "event-schedule.ics");
    });
  };

  return (
    <div>
      <button onClick={handleSave}>Download Watering Schedule</button>
    </div>
  );
}