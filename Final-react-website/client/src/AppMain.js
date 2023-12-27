import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import NumberGuessingGame from "./component/Game/NumberGuessingGame";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/component/Game/NumberGuessingGame'
              element={<NumberGuessingGame />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
