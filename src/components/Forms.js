import React from "react";
import "./formStyles.css";

const Forms = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="8" placeholder="Type a short message" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
