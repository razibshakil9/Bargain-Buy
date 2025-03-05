import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("userToken"); // Check if user is logged in

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = (event) => {
    event.preventDefault();

    if (!isAuthenticated) {
      alert("You must be logged in to submit this form!");
      navigate("/login");
      window.scrollTo(0, 0);
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Your data has been submitted successfully!");

    // ✅ Reset form fields after successful submission
    setFormData(initialData);
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="message"
          className="textarea"
          placeholder="Write a message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </FormGroup>

      <button className="booking_form-btn" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default BookingForm;
