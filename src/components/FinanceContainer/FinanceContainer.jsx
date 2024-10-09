import { useState, useEffect, useCallback } from 'react';
import '../../styles/finance-calculator.css'

const FinanceContainer = () => {
  let initalValues = {
    modelYear: '',
    carInfo: '',
    mileage: '',
    color: '',
    engineType: '',
    engineCapacity: '',
    transmission: '',
    assembly: '',
    registrationCity: '',
    damage: ''
  }
  const [isResultShow, setShowResult] = useState(false)
  const [formData, setFormData] = useState(initalValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true)
    setFormData(initalValues)
    console.log(formData);
    // Handle form submission (e.g., send to an API)
  };

  return (
    <div className="container mt-5">
      <h2>Car Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Model Year</label>
          <input 
            type="text" 
            name="modelYear" 
            className="form-control" 
            value={formData.modelYear} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Car Info</label>
          <input 
            type="text" 
            name="carInfo" 
            className="form-control" 
            value={formData.carInfo} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Mileage</label>
          <input 
            type="text" 
            name="mileage" 
            className="form-control" 
            value={formData.mileage} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Color</label>
          <input 
            type="text" 
            name="color" 
            className="form-control" 
            value={formData.color} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Engine Type</label>
          <input 
            type="text" 
            name="engineType" 
            className="form-control" 
            value={formData.engineType} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Engine Capacity</label>
          <input 
            type="text" 
            name="engineCapacity" 
            className="form-control" 
            value={formData.engineCapacity} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Transmission</label>
          <input 
            type="text" 
            name="transmission" 
            className="form-control" 
            value={formData.transmission} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Assembly</label>
          <input 
            type="text" 
            name="assembly" 
            className="form-control" 
            value={formData.assembly} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Registration City</label>
          <input 
            type="text" 
            name="registrationCity" 
            className="form-control" 
            value={formData.registrationCity} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label>Damage</label>
          <textarea 
            name="damage" 
            className="form-control" 
            value={formData.damage} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">Calculate</button>
      </form>

      {isResultShow && <div>
        The Calculated Result : 500000000 PKR
      </div>}
    </div>
  );
};

export default FinanceContainer;
