import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";
let baseURL = "http://localhost:3000/cars/";
function Car({ car }) {
  let [rented, setRented] = useState(false);
  let buttonHandler = () => {
    delete car.tenant;
    axios.put(baseURL + car.id, car).then(response => console.log(response.data))
    setRented(false)
  };
  useEffect(()=> {
    if (car.tenant) setRented(true)
  }, [car.tenant])

  return (
    <tr className={rented ? "rentedOn" : "rentedOff"}>
      <td>{car.id}</td>
      <td>{car.Name}</td>
      <td>{car.Year}</td>
      <td>{car.Origin}</td>
      <td>
        <Link to={"/details/" + car.id}>
          <Container>
            <TbListDetails size="25" />
          </Container>
        </Link>
      </td>
      <td>
          {rented && (
            <Button variant="success" onClick={()=> buttonHandler()}>
              Returned
            </Button>
          )}
        <Link to={"/rent/" + car.id}>
          {!rented && (
            <Button variant="info">
              Rent
            </Button>
          )}
        </Link>

      </td>
    </tr>
  );
}

export default Car;
