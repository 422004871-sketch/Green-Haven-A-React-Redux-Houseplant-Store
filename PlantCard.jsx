import React from "react";

const PlantCard = ({ plant, inCart, onAdd }) => (
  <div className="plant-card">
    <img src={plant.img} alt={plant.name} width="150" />
    <h4>{plant.name}</h4>
    <p>${plant.price}</p>
    <button onClick={onAdd} disabled={inCart}>
      {inCart ? "Added" : "Add to Cart"}
    </button>
  </div>
);

export default PlantCard;
