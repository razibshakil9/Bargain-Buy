import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import masterCard from "../../assets/all-images/master-card.jpg";
import payPal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    const isAuthenticated = localStorage.getItem("userToken"); // Check if logged in

    if (!isAuthenticated) {
      alert("You must be logged in to reserve!");
      navigate("/login"); // Redirect to login
      return;
    }

    alert("Reserved Successfully! 🎉");
  };

  return (
    <>
      <div className="payment">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
      </div>
      <div className="payment mt-3">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Cheque Payment
        </label>
      </div>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Card
        </label>
        <img src={masterCard} alt="MasterCard" />
      </div>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> PayPal
        </label>
        <img src={payPal} alt="PayPal" />
      </div>
      <div className="payment text-end mt-5">
        <button onClick={handleReserve}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
