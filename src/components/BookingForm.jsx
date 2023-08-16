import React, { useState } from "react";
import "../styles/BookingForm.css";

export default function BookingForm(props) {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <section className="booking-form-container">
      <form onSubmit={handleSumbit} className="booking-form">
        <h2>Reservation</h2>
        <div className="form-group">
          <label htmlFor="book-date">Date:</label>
          <input
            id="book-date"
            value={date}
            onChange={(e) => handleChange(e.target.value)}
            type="date"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="book-time">Time:</label>
          <select
            id="book-time"
            value={times}
            onChange={(e) => setTimes(e.target.value)}
            required
          >
            <option value="">Select a Time</option>
            {props.availableTimes.availableTimes.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="book-guests">Guests:</label>
          <input
            id="book-guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            type="number"
            placeholder={0}
            max={10}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="book-occasion">Occasion:</label>
          <select
            id="book-occasion"
            key={occasion}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an Option</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="form-group">
          <input
            aria-label="On Click"
            type="submit"
            value="Apply"
            className="submit-button"
          />
        </div>
      </form>
    </section>
  );
}
