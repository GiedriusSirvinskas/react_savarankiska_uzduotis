import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
let baseURL = "http://localhost:3000/cars/";

function CarDetails() {
  let [car, setCar] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios.get(baseURL + id).then((response) => setCar(response.data));
  }, [id]);
  return (
    <div>
      <Container className="m-auto">
        <Card className="border-0 shadow m-1">
          <Container>
            <Card.Body>
              <Card.Title>
                <h2>Vehicle Information</h2>
              </Card.Title>
              <Card.Text>
                <p>MPG: {car.Miles_per_Gallon}</p>
                <p>Cylinders: {car.Cylinders} cyl</p>
                <p>Engine Displacement: {car.Displacement} </p>
                <p>Horsepower: {car.Horsepower} hp</p>
                <p>Weight: {car.Weight_in_lbs} lbs</p>
                <p>Acceleration 0-100: {car.Acceleration} seconds</p>
              </Card.Text>
            </Card.Body>
          </Container>
        </Card>
      </Container>
    </div>
  );
}

export default CarDetails;
