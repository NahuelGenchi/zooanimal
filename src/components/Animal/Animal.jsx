import { useState } from "react";

import macaw from "../../assets/macaw.png";
import "./Animal.scss";

const Animal = ({animalData}) => {
  const [toggleAnimalInfo, setToggleAnimalInfo] = useState(false);

  let {
    active_time,
    animal_type,
    diet,
    geo_range,
    habitat,
    id,
    image_link,
    latin_name,
    length_max,
    length_min,
    lifespan,
    name,
    weight_max,
    weight_min
  } = animalData;

  length_min = Number(length_min);
  length_max = Number(length_max);
  lifespan = Number(lifespan);
  weight_max = Number(weight_max);
  weight_min = Number(weight_min);

  const toggleAnimalInfoDisplay = () => {
    toggleAnimalInfo === false ? setToggleAnimalInfo(true) : setToggleAnimalInfo(false);
  };

  return(
    <div className="animal-container">
      <img className="ac-img" src={image_link} alt={name}/>
      <h2>{name}</h2>
      <span className="ac-latinname">{latin_name}</span>
      <button className="ac-moreinfo" onClick={toggleAnimalInfoDisplay}>More information</button>
      <div className="ac-info" style={{ display: toggleAnimalInfo === false ? "none" : "initial" }}>
        <div className="aci-container">
          <div className="acic-top">
            <div className="acict-logo">
              <img src={macaw} alt="Zoo Animals logo" />
              <span>Zoo Animals</span>
            </div>
            <button className="acict-button" onClick={toggleAnimalInfoDisplay}>
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          <article className="acic-main">
            <img src={image_link} alt={name} />
            <h1>{name}</h1>
            <span className="ac-latinname">{latin_name}</span>
            <div className="acicm-data">
              <h3>Animal type:</h3>
              <span>{animal_type}</span>
              <h3>Diet:</h3>
              <span>{diet}</span>
              <h3>Geography range:</h3>
              <span>{geo_range}</span>
              <h3>Habitat:</h3>
              <span>{habitat}</span>
              <h3>Active time:</h3>
              <span>{active_time}</span>
              <h3>Lifespan:</h3>
              <span>{lifespan} years</span>
              <h3>Average weight:</h3>
              <span>{Math.ceil(weight_min + weight_max) / 2} pounds</span>
              <h3>Average length:</h3>
              <span>{Math.ceil(length_min + length_max) / 2} feet</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Animal;