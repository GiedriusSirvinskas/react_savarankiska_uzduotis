import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";

function Car({ car }) {
  let [rented, setRented] = useState();
  let buttonHandler = () => {
    setRented((currentState) => !currentState);
  };

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
        <Link to={"/rent/" + car.id}>
          {rented && (
            <Button variant="success" onClick={() => buttonHandler()}>
              Returned
            </Button>
          )}
        </Link>
        <Link to={"/rent/" + car.id}>
          {!rented && (
            <Button variant="info" onClick={() => buttonHandler()}>
              Rent
            </Button>
          )}
        </Link>

      </td>
    </tr>
  );
}

export default Car;
