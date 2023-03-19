import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="light" className="shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <GiCarWheel size={50} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contacts</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
