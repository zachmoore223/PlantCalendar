import {useState, useEffect} from 'react';
import User from './User';

export default function Plant({user}) {
    const [plants, setPlants] = useState([]);
                    fetch("http://localhost:8080/api/plants")
                          .then(res => res.json())
                          .then(response => setPlants(response));

        return(
            <div>
                           {plants
                           .map(plant => (
                           <div>
                           <h4 key={plant.id}>{plant.name}</h4>
                           <img src={plant.imgURL} id="plantImages" />
                           <br />

//                           <button onClick={AddPlant(user, plant)} >Add Plant</button>

                           </div>


                           ))}
            </div>
            );

}

//function AddPlant(user, plant) {
//                  fetch("http://localhost:8080/api/users/" + user.username + "/plantCollection/" + plant.id,
//                  {'method': 'PUT', 'cache': 'default'})
//                          .then(res => res.json());                          ;
//}




