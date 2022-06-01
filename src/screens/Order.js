import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";

const Order = () => {
  //const [dateAndTime, setDateAndTime] = useState(new Date());
  //const [numberOfPeople, setNumberOfPeople] = useState(1);
  const minNumberOfPeople = 1;
  const maxNumberOfPeople = 10;

  const handleChange = (event) => {
    const value = Math.max(
      minNumberOfPeople,
      Math.min(maxNumberOfPeople, Number(event.target.value))
    );
    setNumberOfPeople(value);
  };

  return (
    <div>
      <DateTimePicker
        format="dd-MM-y hh:mm"
        minDate={new Date()}
        formatHour="HH"
        onChange={setDateAndTime}
        value={dateAndTime}
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
