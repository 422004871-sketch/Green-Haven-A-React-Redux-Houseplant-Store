import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";

const plants = [
  { id: 1, name: "Aloe Vera", price: 12, category: "Succulents", img: "/images/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "/images/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 18, category: "Flowering", img: "/images/peace.jpg" },
  { id: 4, name: "Spider Plant", price: 10, category: "Indoor", img: "/images/spider.jpg" },
  { id: 5, name: "Cactus", price: 8, category: "Succulents", img: "/images/cactus.jpg" },
  { id: 6, name: "Pothos", price: 14, category: "Hanging", img: "/images/pothos.jpg" },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />
      <div className="product-container">
        <h2>🌿 Our Houseplants</h2>
        <div className="product-grid">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              inCart={cartItems.some((item) => item.id === plant.id)}
              onAdd={() => handleAdd(plant)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
