import React from "react";

const OrderContext = React.createContext({
  dish: null,
  setDish: () => {},
  drinks: null,
  setDrinks: () => {},
  dateAndTime: null,
  setDateAndTime: () => {},
  numberOfPeople: null,
  setNumberOfPeople: () => {},
});

export default OrderContext;
