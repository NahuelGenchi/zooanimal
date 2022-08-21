import { useState } from "react";

import macaw from "../../assets/macaw.png";
import "./Animal.scss";

const Animal = ({animalData}) => {
  const [toggleAnimalInfo, setToggleAnimalInfo] = useState(false);

  const {
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
              <span>Animal type: {animal_type}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Animal;