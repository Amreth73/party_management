import React, { useContext, useState, useEffect } from "react";
import "./receipt.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserProvider";
import { usePrice } from "../service pages/PriceProvider";
const Receipt = () => {
  const now = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const currentDate = now.toLocaleDateString("en-US", options);
  const { price } = usePrice();
  const serverDateFormat = now.toISOString().split("T")[0];

  const location = useLocation();
  const navigate = useNavigate();
  const receipt = location.state || {};
  const min = 100000;
  const max = 999999;

  const { userId, venue } = useContext(UserContext);
  const recid = Math.floor(Math.random() * (max - min + 1)) + min;
  const [form, setForm] = useState({
    receiptid: recid.toString(),
    username: receipt.cardHolderName,
    amount: receipt.totalPrice,
    date: serverDateFormat,
    venue: venue,
    user: {
      id: userId,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", form);
    console.log(userId);

    try {
      const response = await axios.post(
        "http://localhost:8080/payment/add",
        form
      );
      console.log("Response:", response.data);
    } catch (e) {
      if (e.response) {
        console.error("Error Response Data:", e.response.data);
        console.error("Error Response Status:", e.response.status);
        console.error("Error Response Headers:", e.response.headers);
      } else {
        console.error("Error Message:", e.message);
      }
    }

    navigate("/");
  };

  return (
    <div className="rec-who">
      <div className="receipt-container">
        <h2>Payment Receipt</h2>
        <div className="receipt">
          <div className="receipt-header">
            <h3 style={{ color: "black" }}>Receipt ID: #{recid}</h3>
            <p>Date: {currentDate}</p>
          </div>
          <div className="receipt-body">
            <div className="receipt-item">
              <span>Payed By:</span>
              <span>{receipt.cardHolderName}</span>
            </div>
            <div className="receipt-item">
              <span>Recipient ID:</span>
              <span>{"#" + recid}</span>
            </div>
            <div className="receipt-item">
              <span>Custom Message:</span>
              <span>Payment Successful</span>
            </div>
            <div className="receipt-item">
              <span>Total Amount:</span>
              <span>${price}</span>
            </div>
          </div>
        </div>
        <button className="btns" onClick={(e) => handleSubmit(e)}>
          Return to home page
        </button>
      </div>
    </div>
  );
};

export default Receipt;
