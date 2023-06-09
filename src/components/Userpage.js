import React, { useState, useCallback, useEffect } from "react";
import classes from "./Userpage.module.css";
import hotel1 from "../images/hotel1.jpg";

const dummyHotels = [
  {
    id: 1,
    name: "Hotel classic 1",
    image: hotel1,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 1000,
      deluxeRoomPrice: 1500,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 2,
    name: "Hotel Presidency 2",
    image: hotel1,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 1000,
      deluxeRoomPrice: 1500,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 3,
    name: "Hotel Supreme 3",
    image: hotel1,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 1000,
      deluxeRoomPrice: 1500,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 4,
    name: "Hotel Raddison 4",
    image: hotel1,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 1000,
      deluxeRoomPrice: 1500,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 5,
    name: "Hotel Royal 5",
    image: hotel1,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 1000,
      deluxeRoomPrice: 1500,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
];

export default function Userpage(props) {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

  const getHotelsFromDB = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch(
        "https://online-hotel-registration.onrender.com/api/hotel"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedHotels = [];

      for (const key in data) {
        loadedHotels.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          location: data[key].location,
          price: data[key].price,
          image: data[key].images,
          noOfRooms: data[key].noOfRooms,
          rating: data[key].rating,
        });
      }
      setHotels(loadedHotels);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  useEffect(() => {
    getHotelsFromDB();
  }, [getHotelsFromDB]);
  return (
    <React.Fragment>
      <header>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <h2>Book Your Hotel</h2>
            <div className={classes.buttondiv}>
              {/* <button onClick={props.onLogin}>Login</button> */}
              <button className={classes.logoutButton} onClick={props.onSignup}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div class={classes["search-container"]}>
        {/* <input
          type="text"
          className={classes["search-input"]}
          placeholder="Search..."
        /> */}
        {/* <div>
          <button onClick={getHotelsFromDB}>Show Hotels</button>
        </div> */}
        <select className={classes["search-option"]}>
          <option value="all">All</option>
          <option value="price">Price</option>
          <option value="location">Location</option>
          <option value="available">Availaible</option>
          <option value="rating">Rating</option>
        </select>
        <button className={classes["search-button"]} onClick={getHotelsFromDB}>
          Show hotels
        </button>
      </div>
      <section>
        <div className={classes["hotel-list"]}>
          {hotels.map((hotel) => (
            <div className={classes["hotel-card"]} key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p>
                Pricing: Standard Room - Rs.{hotel.price},
                {/* Deluxe Room - Rs.{hotel.pricing.deluxeRoomPrice} */}
              </p>
              <p>Reviews: {hotel.reviews}</p>
              <p>Total Rooms:{hotel.noOfRooms}</p>
              <button className={classes.booknowbutton}>Book Now</button>
            </div>
          ))}
        </div>
        {error}
      </section>
      ;
    </React.Fragment>
  );
}
