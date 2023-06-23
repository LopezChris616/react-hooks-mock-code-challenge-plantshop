import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const displayPlants = plants.map(plant => <PlantCard plant={plant} key={plant.id} />)

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
