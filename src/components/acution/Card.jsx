import React, { useState } from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const AuctionCard = ({ car }) => {
  const navigate = useNavigate();
  const initialBid = Number(car?.highestBid) || 0;
  const [bid, setBid] = useState(initialBid);

  const isAuthenticated = localStorage.getItem("userToken");

  const handleBid = () => {
    if (!isAuthenticated) {
      alert("You must be logged in to place a bid!");
      navigate("/login");
      scroll(0, 0);
      return;
    }

    const newBid = prompt(`Enter your bid (Current highest: $${bid})`);
    const newBidNumber = Number(newBid);

    if (!isNaN(newBidNumber) && newBidNumber > bid) {
      setBid(newBidNumber);
    } else {
      alert("Bid must be a number higher than the current highest bid!");
    }
  };

  return (
    <Col md={4} className="mb-4">
      <div className="card mb-4">
        <img
          src={car?.imgUrl}
          alt={`${car?.brand} ${car?.model}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {car?.brand} ({car?.model})
          </h5>
          <p className="card-text">
            Starting Price: ${car?.price}
            <br />
            Highest Bid: ${bid}
          </p>
          <button className="btn btn-primary" onClick={handleBid}>
            Place Bid
          </button>
        </div>
      </div>
    </Col>
  );
};

export default AuctionCard;
