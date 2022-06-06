import { useContext, useEffect } from "react";
import OrderContext from "../OrderContext";

const ShowReceipt = () => {
  const { selectedDrinks, dateAndTime, dish, orderId } =
    useContext(OrderContext);

  const options = {
    dateStyle: "full",
    timeStyle: "full",
    hour12: false,
  };

  const completedOrder = {
    dish: dish.meals[0].strMeal,
    selectedDrinks: selectedDrinks,
    dateAndTime: dateAndTime,
  };

  useEffect(() => {
    localStorage.setItem(orderId, JSON.stringify(completedOrder));
  }, []);

  return (
    <div>
      <p>{orderId}</p>
      <p>{dish.meals[0].strMeal}</p>
      <p>{selectedDrinks}</p>
      <p>{dateAndTime.toLocaleString([], options)}</p>
    </div>
  );
};

export default ShowReceipt;
