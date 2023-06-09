import React, { useState } from "react";
import classes from "./Adminpage.module.css";

export default function Adminpage() {
  const [newHotel, setNewHotel] = useState({
    name: "",
    mobile: "",
    location: "",
    description: "",
    price: "",
    images: "",
  });

  const inputChangeHandler = (e) => {
    setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
  };

  async function addNewHotelHandler(newHotel) {
    const response = await fetch(
      "https://online-hotel-registration.onrender.com/api/hotel",
      {
        method: "POST",
        body: JSON.stringify(newHotel),
        headers: { "Content-Type": "application/json" },
      }
    );
    // if (response.ok) {
    //   setLogin(false);
    //   setIsLoggedIn(true);
    // }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Hotel Reservation</h1>

      <form
        onSubmit={addNewHotelHandler}
        className={classes["reservation-form"]}
      >
        <label htmlFor="name" className={classes.inputLabel}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={classes.inputColumn}
          required
          onChange={inputChangeHandler}
        />

        <label htmlFor="mobile" className={classes.inputLabel}>
          Mobile:
        </label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          className={classes.inputColumn}
          required
          onChange={inputChangeHandler}
        />

        <label htmlFor="location" className={classes.inputLabel}>
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className={classes.inputColumn}
          required
          onChange={inputChangeHandler}
        />

        <label htmlFor="description" className={classes.inputLabel}>
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className={classes.inputColumn}
          required
          onChange={inputChangeHandler}
        />

        <label htmlFor="price" className={classes.inputLabel}>
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          step="100"
          required
          className={classes.inputColumn}
          onChange={inputChangeHandler}
        />

        <label htmlFor="image" className={classes.inputLabel}>
          Image link:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          required
          className={classes.inputColumn}
          onChange={inputChangeHandler}
        />

        <button type="submit" className={classes["btn-submit"]}>
          Add Hotel
        </button>
      </form>
    </div>
  );
}
