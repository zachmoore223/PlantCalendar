import React, { useState, useEffect } from "react";
import User from "./User";
import CreateICS from "./CreateICS";
import UserPlantCollection from "./UserPlantCollection";
import PlantRemovePlant from "./PlantRemovePlant";
import OverwaterInfo from "./OverwaterInfo";
import WateringDay from "./WateringDay";
import PlantFilter from "./PlantFilter";

export default function FilterPlant({ filterText, setFilterText, setFilterLight,
                                      setFilterWater, isPetFriendly, setIsPetFriendly}) {

    const [showFilter, setShowFilter] = useState(false);

if(showFilter === false){
    return (
        <button onClick={() => setShowFilter(true)} className = "button">Show Filter Settings</button>
    );
}
    return (
            <div id="button-hide-filter">
            <button onClick={() => {setShowFilter(false); setFilterText('');
                                    setFilterLight('All'); setFilterWater('All');
                                    setIsPetFriendly(false);}}
                                    className = "button">Remove Filter Settings</button>
            <br/>
            <div id="filter-section">

            {/* Allows the user search for any given plant*/}
            <SearchBar filterText = {filterText} filterTextChange = {setFilterText}/>

            {/* Allows the user to filter by light amount*/}
            <label>Filter by Light Amount: </label>
            <select onChange={(e) => setFilterLight(e.target.value)}>
              <option value='All'>All</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>

            {/* Allows the user to filter by water amount*/}
            <label>Filter by Water Amount: </label>
            <select onChange={(e) => setFilterWater(e.target.value)}>
               <option value='All'>All</option>
               <option value='Low'>Low</option>
               <option value='Medium'>Medium</option>
               <option value='High'>High</option>
            </select>

            {/* Allows the user to filter pet friendly plants*/}
            <label>
                <input
                   type="checkbox"
                   checked={isPetFriendly}
                   onChange={(e) => setIsPetFriendly(e.target.checked)} />
                   {' '}
                   Pet Friendly Only
            </label>

            </div>
         </div>
    );
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
