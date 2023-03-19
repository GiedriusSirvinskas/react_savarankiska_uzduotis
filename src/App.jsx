import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import CarDetails from "./components/CarDetails";
import RentForm from "./components/RentForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rent/:id" element={<RentForm />} />
      </Routes>
    </div>
  );
}

export default App;
