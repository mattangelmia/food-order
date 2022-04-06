import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./NavHeader";
import { useState, useEffect, useReducer } from "react";
import FoodList from "./FoodList";
import CartModal from "./CartModal";
import "animate.css";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <FoodList />
      <CartModal />
    </div>
  );
}

export default App;
