import React, { useState, useEffect } from "react";


export default function Citations () {
const [viewCitations, setViewCitations] = useState(false);

// if viewCitations is true, display the citations
    if (viewCitations == true){
        return (
            <div>
                {/* a button to hide the citations */}
                <button className="linksButton" onClick={() => setViewCitations(false)}> Hide </button>
                {/* the citations */}
                <p className="citations">
                    Technologies Used: Java, JavaScript, React, Spring Boot, HTML, CSS
                    <br /><br />
                     <a href="https://github.com/2023-Spring-Cohort/PlantCalendar/blob/main/README.md" target="_blank"> Link to README File</a>
                    <br /><br />
                    Logo created with content license image from: <a href="https://pixabay.com/" target="_blank"> https://pixabay.com/ </a>
                    <br /><br />
                    Background under free license from: <a href="https://www.freepik.com/" target="_blank"> https://www.freepik.com/ </a>
                </p>
            </div>
        );
    }
    // if viewCitations is false, display a button to show the citations
    else {
        return (
            <button className="linksButton" onClick={() => setViewCitations(true)}> Citations </button>
        );
    }
}




