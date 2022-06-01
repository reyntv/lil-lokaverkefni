import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SelectDrinks = () => {
  //const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const result = await axios("https://api.punkapi.com/v2/beers");
    setDrinks(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  if (drinks.length === 0) {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Drinks</h2>
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Drinks</h2>
      {drinks.map((drink) => (
        <div>
          <p>{drink.name}</p>
        </div>
      ))}
      <button>
        <Link to="/Order">Next</Link>
      </button>
    </main>
  );
};

export default SelectDrinks;
