import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Animal } from "../index";

import "./AnimalList.scss";

const AnimalList = () => {
  const [animals, setAnimals] = useState();
  const [animalsCategory, setAnimalsCategory] = useState(animals);

  const { categoryId } = useParams();

  useEffect(
    () => {
      fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((data) => data.json())
      .then((data) => {
        setAnimals(data);
      });
    }, []
  );
  
  useEffect(
    () => {
      setAnimalsCategory(animals?.filter((animal) => animal.animal_type === categoryId));
      console.log(categoryId);
    }, [animals]
  );

  useEffect(
    () => {
      setAnimalsCategory(animals?.filter((animal) => animal.animal_type === categoryId));
      console.log(categoryId);
    }, [categoryId]
  );

  return(
    <main className="main">
      <div className="m-container">
        {(animalsCategory?.length < 1 && categoryId !== undefined) ? "No animals, refresh the page please!" : animalsCategory?.map((animal, index) => {
          return(
            <Animal animalData={{...animal}} key={index}/>
          );
        })}
        {categoryId === undefined && animals?.map((animal, index) => {
          return(
            <Animal animalData={{...animal}} key={index}/>
          );
        })}
      </div>
    </main>
  );
};

export default AnimalList;