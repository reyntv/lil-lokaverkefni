import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SelectDish = () => {
  //const [dish, setDish] = useState([]);

  const getDish = async () => {
    const result = await axios(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
    setDish(result.data);
    console.log(result.data.meals[0].strMeal);
  };

  useEffect(() => {
    getDish();
  }, []);

  if (dish.length === 0) {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Dish</h2>
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Dish</h2>
      <div>{dish.meals[0].strMeal}</div>
      <button onClick={() => getDish()}>Generate new</button>
      <button>
        <Link to="/SelectDrinks">Drinks selection</Link>
      </button>
    </main>
  );
};

export default SelectDish;
