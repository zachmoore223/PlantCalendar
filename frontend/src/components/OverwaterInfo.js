import React from 'react';

// This is an object containing information about how to deal with overwatering for each plant.
const overwaterInfo = {

    Succulent: "Succulents are known for their ability to store water in their leaves, and they are susceptible to root rot if overwatered. " +
        "If you have overwatered your succulent, remove it from its pot and allow the soil to dry out completely before repotting it in a pot with fresh, well-draining soil.",

    Philodendron: "Overwatering a philodendron can lead to root rot and fungal infections. " +
        "If you notice that the soil is wet and the plant is wilting, stop watering it immediately. Allow the soil to dry out before resuming a regular watering schedule. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    'Air Plant': "Overwatering an air plant can cause the leaves to turn brown and fall off. " +
        "To remedy this, remove the plant from its container and let it dry out in a well-ventilated area for several hours or overnight. " +
        "Once it is completely dry, you can resume your regular watering schedule.",

    Ficus: "Ficus plants are sensitive to overwatering, which can lead to yellowing leaves, wilting, and leaf drop. " +
        "If you have overwatered your ficus, stop watering it immediately and let the soil dry out completely. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    Monstera: "Overwatering a Monstera can lead to root rot and fungal infections. " +
        "If you notice that the soil is wet and the plant is wilting, stop watering it immediately. " +
        "Allow the soil to dry out before resuming a regular watering schedule. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    'Snake Plant': "Snake plants are relatively drought-tolerant and can survive with minimal watering. " +
        "However, overwatering can cause the leaves to turn yellow and the roots to rot. " +
        "If you have overwatered your snake plant, stop watering it immediately and let the soil dry out completely. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    Zamioculcas: "Overwatering a Zamioculcas can cause the leaves to turn yellow and fall off. " +
        "To remedy this, remove the plant from its container and let it dry out in a well-ventilated area for several hours or overnight. " +
        "Once it is completely dry, you can resume your regular watering schedule.",

    'Spider Plant': "Overwatering a spider plant can lead to root rot and fungal infections. " +
        "If you notice that the soil is wet and the plant is wilting, stop watering it immediately. " +
        "Allow the soil to dry out before resuming a regular watering schedule. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    Fern: "Ferns are sensitive to overwatering, which can lead to root rot and fungal infections. " +
        "If you have overwatered your fern, stop watering it immediately and let the soil dry out completely. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot.",

    'Peace Lily': "Overwatering a peace lily can cause the leaves to turn yellow and the roots to rot. " +
        "If you have overwatered your peace lily, stop watering it immediately and let the soil dry out completely. " +
        "You can also remove the plant from the pot and check the roots for signs of damage or rot."

};

function OverwaterInfo({ userPlants }) {
    // If the userPlants is empty or not provided, return null
    if (!userPlants || userPlants.length === 0) {
        return null;
    }

    // Otherwise, render the OverwaterInfo component
    return (
        <div className="overwater-info">
            <h3>Over-watering Information</h3>
            {userPlants.map(plant => (
                <div key={plant.id}>
                    <h4>{plant.name}</h4>
                    <p>{overwaterInfo[plant.name]}</p>
                </div>
            ))}
        </div>
    );
}

export default OverwaterInfo;