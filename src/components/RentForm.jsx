import { Formik } from "formik";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let baseURL = "http://localhost:3000/cars/";

function RentForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1>New tenant</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          rentTime: "",
          bankCardNumber: "",
        }}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          axios
            .patch(baseURL + id, { tenant: values})
            .then((response) => console.log(response.data));
          resetForm();
          navigate("/");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rent time ( hours )</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rent time"
                name="rentTime"
                value={values.rentTime}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bank Card Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Bank Card Number"
                name="bankCardNumber"
                value={values.bankCardNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" disabled={!dirty}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RentForm;
