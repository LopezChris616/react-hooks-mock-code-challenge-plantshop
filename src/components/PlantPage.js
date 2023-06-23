import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter(plant => {
    if(search.length === 0) return true;

    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plantList => setPlants(plantList))
      .catch(err => console.err(err));
  }, [])

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  return (
    <main>
      <NewPlantForm plants={plants} onSetPlants={setPlants} />
      <Search search={search} onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
