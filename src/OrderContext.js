import React from "react";

const OrderContext = React.createContext({
  orderId: null,
  setOrderId: () => {},
  dish: null,
  setDish: () => {},
  selectedDrinks: null,
  setSelectedDrinks: () => {},
  drinksMenu: null,
  setDrinksMenu: () => {},
  dateAndTime: null,
  setDateAndTime: () => {},
  numberOfPeople: null,
  setNumberOfPeople: () => {},
});

export default OrderContext;
