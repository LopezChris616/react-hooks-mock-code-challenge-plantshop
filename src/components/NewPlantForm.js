import React, { useState } from "react";

function NewPlantForm({ plants, onSetPlants }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0
  });

  function handleInputChange(event) {
    const plant = {
      ...newPlant,
      [event.target.name]: event.target.value
    }
    setNewPlant(plant);
  }

  function handleNewPlant(event) {
    event.preventDefault();
    console.log("test");
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(plant => onSetPlants([...plants, plant]))
      .catch(err => console.err(err));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleInputChange} value={newPlant.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleInputChange} value={newPlant.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleInputChange} value={newPlant.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
