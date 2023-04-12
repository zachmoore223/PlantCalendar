import React, { useState, useEffect } from "react";

export default function WateringDay() {
const [activeDay, setActiveDay] = useState(null);

return (
    <div id="selectDayButtons">
        <p className="selectWateringDay"> Select Your Watering Day:</p>
        <button className={`dayButton ${activeDay === 'sun' ? 'active' : ''}`} id="sun" onClick={() => {changeDate("SU");setActiveDay('sun')}}>Sun</button>
        <button className={`dayButton ${activeDay === 'mon' ? 'active' : ''}`} id="mon" onClick={() => {changeDate("MO");setActiveDay('mon')}}>Mon</button>
        <button className={`dayButton ${activeDay === 'tue' ? 'active' : ''}`} id="tue" onClick={() => {changeDate("TU");setActiveDay('tue')}}>Tue</button>
        <button className={`dayButton ${activeDay === 'wed' ? 'active' : ''}`} id="wed" onClick={() => {changeDate("WE");setActiveDay('wed')}}>Wed</button>
        <button className={`dayButton ${activeDay === 'thu' ? 'active' : ''}`} id="thu" onClick={() => {changeDate("TH");setActiveDay('thu')}}>Thu</button>
        <button className={`dayButton ${activeDay === 'fri' ? 'active' : ''}`} id="fri" onClick={() => {changeDate("FR");setActiveDay('fri')}}>Fri</button>
        <button className={`dayButton ${activeDay === 'sat' ? 'active' : ''}`} id="sat" onClick={() => {changeDate("SA");setActiveDay('sat')}}>Sat</button>
    </div>
    );
}

function changeDate(day) {
        fetch(
            "http://localhost:8080/api/addRR/"
            + day,
            { method: "PUT", cache: "default" }
        );
    }



