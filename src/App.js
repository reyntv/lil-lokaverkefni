import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import SelectDish from "./screens/SelectDish";
import SelectDrinks from "./screens/SelectDrinks";
import Order from "./screens/Order";
import Home from "./Home";
import OrderContext from "./OrderContext";

const App = () => {
  const [dish, setDish] = useState([]);
  const [inputState, setInputState] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [dateAndTime, setDateAndTime] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  return (
    <OrderContext.Provider
      value={{
        dish,
        setDish,
        inputState,
        setInputState,
        drinks,
        setDrinks,
        dateAndTime,
        setDateAndTime,
        numberOfPeople,
        setNumberOfPeople,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="selectdish" element={<SelectDish />} />
        <Route path="selectdrinks" element={<SelectDrinks />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </OrderContext.Provider>
  );
};

export default App;
