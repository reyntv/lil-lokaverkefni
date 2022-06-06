import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import OrderContext from "../OrderContext";
import validator from "validator";
import "react-datepicker/dist/react-datepicker.css";

const Order = () => {
  const { orderId, setOrderId } = useContext(OrderContext);
  const { dateAndTime, setDateAndTime } = useContext(OrderContext);
  const { numberOfPeople, setNumberOfPeople } = useContext(OrderContext);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const minNumberOfPeople = 1;
  const maxNumberOfPeople = 10;

  useEffect(() => {
    return () => {
      console.log(`orderId ${orderId}`);
    };
  }, [emailIsValid, orderId]);

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
  const findOrder = (email) => {
    if (validator.isEmail(email)) {
      setEmailIsValid(true);
      setOrderId(email);
    } else {
      setEmailIsValid(false);
    }
  };

  const OrderButton = () => {
    return (
      <div>
        {emailIsValid ? (
          <Link to="/showreceipt">Order</Link>
        ) : (
          <p>Email required to order.</p>
        )}
      </div>
    );
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
      Your email:
      <input
        type="email"
        placeholder="Your email address"
        onChange={(e) => findOrder(e.target.value)}
      />
      <OrderButton></OrderButton>
    </div>
  );
};

export default Order;
