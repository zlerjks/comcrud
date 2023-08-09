import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Buy from "./Buy";
import Sell from "./Sell";
import { useState } from "react";

function App() {
  const [listOfProd, setListOfProd] = useState([]);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/buy"
          element={
            <Buy listOfProd={listOfProd} setListOfProd={setListOfProd} />
          }
        />
        <Route
          exact
          path="/sell"
          element={
            <Sell setListOfProd={setListOfProd} listOfProd={listOfProd} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
