import "./Animal.scss";

const Animal = ({animalData}) => {
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

  return(
    <div className="animal-container">
      <img src={image_link} alt="" />
      <h2>{name}</h2>
      <span className="ac-latinname">{latin_name}</span>
      <button className="ac-moreinfo">More information</button>
    </div>
  );
};

export default Animal;