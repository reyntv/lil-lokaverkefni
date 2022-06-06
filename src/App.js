import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SelectDish from "./screens/SelectDish";
import SelectDrinks from "./screens/SelectDrinks";
import Order from "./screens/Order";
import Home from "./Home";
import ShowReceipt from "./screens/ShowReceipt";
import OrderContext from "./OrderContext";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const App = () => {
  const [orderId, setOrderId] = useState("");
  const [dish, setDish] = useState([]);
  const [inputState, setInputState] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [dateAndTime, setDateAndTime] = useState(
    setHours(setMinutes(new Date(), 0), 16)
  );
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  return (
    <OrderContext.Provider
      value={{
        orderId,
        setOrderId,
        dish,
        setDish,
        inputState,
        setInputState,
        drinks,
        setDrinks,
        selectedDrinks,
        setSelectedDrinks,
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
        <Route path="showreceipt" element={<ShowReceipt />} />
      </Routes>
    </OrderContext.Provider>
  );
};

export default App;
