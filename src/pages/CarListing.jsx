import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Caritems from "../components/UI/Caritems";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [cars, setCars] = useState(carData);
  const [newCar, setNewCar] = useState({
    imgUrl: "",
    model: "",
    carName: "",
    automatic: "",
    speed: "",
    price: "",
  });

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("userToken");

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You must be logged in to upload a car!");
      navigate("/login"); // Redirect to login page
      return;
    }

    const newCarEntry = { ...newCar, id: cars.length + 1 };
    setCars([...cars, newCarEntry]);
    setNewCar({
      imgUrl: "",
      model: "",
      carName: "",
      automatic: "",
      speed: "",
      price: "",
    });
    alert("Car added successfully!");
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Cars Listing" />
      <section>
        <Container>
          <Row>
            {/* Car Listings */}
            {cars.map((car) => (
              <Caritems key={car.id} item={car} />
            ))}

            {/* Always Show Car Upload Card */}
            <Col lg="4" md="6" sm="12" className="mb-5">
              <Card className="car_item shadow-sm">
                <CardBody>
                  <h4 className="section_title text-center">Upload a Car</h4>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Image URL</Label>
                          <Input
                            type="text"
                            name="imgUrl"
                            value={newCar.imgUrl}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Car Name</Label>
                          <Input
                            type="text"
                            name="carName"
                            value={newCar.carName}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Model</Label>
                          <Input
                            type="text"
                            name="model"
                            value={newCar.model}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Automatic</Label>
                          <Input
                            type="text"
                            name="automatic"
                            value={newCar.automatic}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label>Speed (mph)</Label>
                          <Input
                            type="text"
                            name="speed"
                            value={newCar.speed}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label>Price ($)</Label>
                          <Input
                            type="number"
                            name="price"
                            value={newCar.price}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary" className="w-100">
                      Upload Car
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
