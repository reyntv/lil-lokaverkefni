import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Link } from "react-router-dom";
import OrderContext from "../OrderContext";
import "react-datepicker/dist/react-datepicker.css";

const Order = () => {
  const { dateAndTime, setDateAndTime } = useContext(OrderContext);
  const { numberOfPeople, setNumberOfPeople } = useContext(OrderContext);
  const minNumberOfPeople = 1;
  const maxNumberOfPeople = 10;

  const handleChange = (event) => {
    const value = Math.max(
      minNumberOfPeople,
      Math.min(maxNumberOfPeople, Number(event.target.value))
    );
    setNumberOfPeople(value);
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div>
      <DatePicker
        selected={dateAndTime}
        onChange={(date) => setDateAndTime(date)}
        showTimeSelect
        timeIntervals={15}
        timeFormat="HH:mm"
        filterTime={filterPassedTime}
        minTime={new Date(0, 0, 0, 16, 0)}
        maxTime={new Date(0, 0, 0, 23, 0)}
        dateFormat="MMMM d, yyyy HH:mm"
      />

      <div>
        Number of people:
        <input
          type="number"
          placeholder="Number of people"
          value={numberOfPeople}
          onChange={handleChange}
        />
      </div>
      <button>
        <Link to="/showreceipt">Order</Link>
      </button>
    </div>
  );
};

export default Order;
