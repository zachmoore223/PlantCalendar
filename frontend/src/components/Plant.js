import {useState} from 'react';

export default function Plant() {
    const [plants, setPlants] = useState([]);
                fetch("http://localhost:8080/api/plants")
                          .then(res => res.json())
                          .then(response => setPlants(response));

        return(
            <div className="inline-div">
                           {plants
                           .map(plant => (<h1 key={plant.id}>{plant.name}</h1>))}
                       </div>
            );
}
