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

  console.log(animals);
  return(
    <div>
      {animals?.map((animal, index) => {
        return(
          <Animal name={animal.name} key={index}/>
        );
      })}
    </div>
  );
};

export default AnimalList;