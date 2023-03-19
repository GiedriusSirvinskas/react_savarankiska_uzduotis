import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Car from "./Car";
import Filter from "./Filter";

let baseURL = "http://localhost:3000/cars/";

function Home() {
  let [carList, setCarList] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCarList(response.data);
    });
  }, []);

  let carsjsx = carList.map((car, index) => {
    return <Car car={car} key={index} />;
  });

  return (
    <div>
      <Filter cars={carList} setCarList={setCarList}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Car Name</th>
            <th>Model Year</th>
            <th>Country of Origin</th>
            <th>Details</th>
            <th>
              Rent
              <br />
              Return
            </th>
          </tr>
        </thead>
        <tbody>{carsjsx}</tbody>
      </Table>
    </div>
  );
}

export default Home;
