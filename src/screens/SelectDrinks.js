import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../OrderContext";

const SelectDrinks = () => {
  const { drinks, setDrinks } = useContext(OrderContext);
  const { selectedDrinks, setSelectedDrinks } = useContext(OrderContext);

  const getDrinks = async () => {
    const result = await axios("https://api.punkapi.com/v2/beers");
    setDrinks(result.data);
  };

  const drinkClicked = (drink) => {
    if (selectedDrinks.includes(drink.name)) {
      setSelectedDrinks(selectedDrinks.filter((item) => item !== drink.name));
    } else {
      setSelectedDrinks([...selectedDrinks, drink.name]);
    }
  };

  useEffect(() => {
    getDrinks();
    return () => {
      //setDrinks(drinks.filter((drink) => drink.selected));
      console.log(`drinks to order ${selectedDrinks}`);
    };
  }, [selectedDrinks]);

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
        <div key={drink.id} onClick={() => drinkClicked(drink)}>
          <p>{drink.name} </p>
        </div>
      ))}
      <button>
        <Link to="/Order">Next</Link>
      </button>

      <h2>Drinks selected</h2>
      {selectedDrinks.map((drink) => (
        <div>
          <p>{drink} </p>
        </div>
      ))}
    </main>
  );
};

export default SelectDrinks;
