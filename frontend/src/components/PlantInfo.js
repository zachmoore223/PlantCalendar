import React from 'react';
export default function PlantInfo({ plant, onClose }) {
    return (
        <div className="plant-info">
            <h2>Plant Information</h2>
            <img src={plant.imgURL} alt={plant.name} />
            <h3>Name: {plant.name}</h3>
            <div className="plant-details">
                <p>Watering Schedule: {plant.wateringSchedule}</p>
                <p>
                    Is this pet safe: {plant.petFriendly ? 'Yes' : 'No'}
                </p>
                <p>Water Amount: {plant.waterAmount}</p>
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    );
}