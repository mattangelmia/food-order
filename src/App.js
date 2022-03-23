import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./NavHeader";
import { useState, useEffect, useReducer } from "react";
import FoodList from "./FoodList";
import CartModal from "./CartModal";
import "animate.css";

function foodReducer(state, action) {
  if (action.type === "MODAL_DISPLAY") {
    return { modalDisplay: "flex" };
  }

  return { modalDisplay: "none" };
}

function App() {
  const [foods, setFoods] = useState([
    {
      food: "sushi roll",
      description: "fresh tuna topped with eel sauce and avocado",
      price: "14.99",
      quantity: 1,
    },

    {
      food: "pizza",
      description: "baked to a crisp with mozarrella, basil and tomato sauce",
      price: "9.99",
      quantity: 1,
    },
    {
      food: "special fried rice",
      description: "cooked with onions , shrimp , chicken",
      price: "19.99",
      quantity: 1,
    },
    {
      food: "tacos",
      description:
        "choice of either ,shrimp , chicken, or steak, topped with pico de gallo",
      price: "15.99",
      quantity: 1,
    },
  ]);
  // const [modalDisplay, setModalDisplay] = useState("none");
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartFoods, setCartFoods] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [amountValue, setAmountValue] = useState(0);

  const [foodState, dispatch] = useReducer(foodReducer, {
    modalDisplay: "none",
  });

  function setDisplay() {
    // setModalDisplay("flex");
  }
  // function removeModal() {
  //   setModalDisplay("none");
  // }

  function setQuantity(e) {
    console.log(e.target.value);
    setAmountValue(e.target.value);
  }
  function addFood(food) {
    console.log(food);
    let newFoodItem = { ...food, quantity: amountValue };
    setCartFoods((prevState) => cartFoods.concat(newFoodItem));
    setTotalPrice(totalPrice + Number(food.price));
    // ask slavo specific question on why state doesnt update right away when you console.log(cartFoods) inside the function
  }

  useEffect(() => {
    console.log(cartFoods);
  }, [cartFoods]);

  return (
    <div className="App">
      <NavHeader cartQuantity={cartFoods.length} setDisplay={setDisplay} />
      <FoodList foodList={foods} addFood={addFood} setAmount={setQuantity} />
      <CartModal
        cartFoods={cartFoods}
        display={foodState.modalDisplay}
        // closeModal={removeModal}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;
