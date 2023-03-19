import { Form, FormGroup } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import { Button } from "react-bootstrap";
let baseURL = "http://localhost:3000/cars";

function Filter({ cars, setCarList }) {
  let yearsArray = new Set(cars.map((car) => car.Year));
  let yearsjsx = Array.from(yearsArray).map((year, index) => {
    return (
      <option value={year} key={index}>
        {year.slice(0, 4)}
      </option>
    );
  });

  let countryArray = new Set(cars.map((car) => car.Origin));
  let countryjsx = Array.from(countryArray).map((country, index) => {
    return (
      <option value={country} key={index}>
        {country}
      </option>
    );
  });

  function filterHandler(filterObject) {
    if (filterObject.Year === "All") {
      axios.get(baseURL).then((response) => setCarList(response.data));
    } else {
      let filterParams = new URLSearchParams(filterObject).toString();
      axios
        .get(baseURL + "?" + filterParams)
        .then((response) => setCarList(response.data));
    }
  }
  return (
    <div>
      <Formik
        initialValues={{ Year: "All", Origin: "All" }}
        onSubmit={(values) => {
          filterHandler(values);
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup className="w-25 p-1">
              <Form.Label>Filter by year</Form.Label>
              <Form.Select
                name="Year"
                value={values.Year}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="All">All</option>
                {yearsjsx}
              </Form.Select>
              <Form.Label>Filter by country</Form.Label>
              <Form.Select
                name="Origin"
                value={values.Origin}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="All">All</option>
                {countryjsx}
              </Form.Select>
              <Button type="submit" variant="secondary">
                Filter
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Filter;
