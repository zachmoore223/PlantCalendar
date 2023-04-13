import React, { useState, useEffect } from "react";


export default function AboutHydroHomie () {
const [viewAboutHydroHomie, setViewAboutHydroHomie] = useState(false);

// if viewCitations is true, display the citations
    if (viewAboutHydroHomie == true){
        return (
            <div>
                {/* a button to hide the citations */}
                <button className="linksButton" onClick={() => setViewAboutHydroHomie(false)}> Hide </button>
                {/* the citations */}
                <div className="aboutHydroHomie">
                <h3> What is HydroHomie? </h3>
                <p>
                    HydroHomie is a convenient app that allows you to add plants to a cart from a
                    collection of the most popular house plants. Once you have your house plants
                    added to your cart, you can download a watering schedule based on your cart and add
                    it to your preferred calendar account.
                </p>
                </div>
            </div>
        );
    }
    // if viewCitations is false, display a button to show the citations
    else {
        return (
            <button className="linksButton" onClick={() => setViewAboutHydroHomie(true)}> About HydroHomie </button>
        );
    }
}




