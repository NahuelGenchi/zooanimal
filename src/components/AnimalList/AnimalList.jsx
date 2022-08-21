import { useEffect, useState } from "react";

import { Animal } from "../index";

import "./AnimalList.scss";

const AnimalList = () => {
  const [animals, setAnimals] = useState();

  useEffect(
    () => {
      fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((data) => data.json())
      .then((data) => setAnimals(data));
    }, []
  );

  return(
    <main className="main">
      <div className="m-container">
        {animals?.map((animal, index) => {
          return(
            <Animal animalData={{...animal}} key={index}/>
          );
        })}
      </div>
    </main>
  );
};

export default AnimalList;