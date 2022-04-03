import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./NavHeader";
import { useState, useEffect, useReducer } from "react";
import FoodList from "./FoodList";
import CartModal from "./CartModal";
import "animate.css";

function App() {
  // initial food state array of objects
  const [totals, setTotals] = useState([]);

  const [totalFoodAmount, setTotalFoodAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartFoods, setCartFoods] = useState([]);
  const [cartItem, setCartItem] = useState({});

  const [amountValue, setAmountValue] = useState(0);

  // function foodReducer(state, action) {
  //   if (action.type === "ADD_CART_ITEMS") {
  //     return {
  //       ...state,
  //       cartFoodItems: state.cartFoodItems.concat(action.val),
  //     };
  //   } else if (action.type === "ADD_MODAL_DISPLAY") {
  //     return { modalDisplay: "flex" };
  //   }
  // }

  // const [foodState, dispatch] = useReducer(foodReducer, {
  //   modalDisplay: "none",
  //   totalFoodPrice: 0,
  //   totalFoodQuantity: 0,
  //   cartFoodItems: [],
  // });

  function setDisplay() {
    // dispatch({ type: "ADD_MODAL_DISPLAY" });
  }
  function removeModal() {
    // dispatch({ type: "REMOVE_MODAL_DISPLAY" }); -- caused undefined error
  }

  function setQuantity(e) {
    console.log(e.target.value);
    setAmountValue(e.target.value);
  }
  function addFood(food) {
    console.log(food);
    let newFoodItem = { ...food, quantity: amountValue };
    setCartFoods((prevState) => cartFoods.concat(newFoodItem));
    // dispatch({ type: "ADD_CART_ITEMS", val: newFoodItem });

    // ask slavo specific question on why state doesnt update right away when you console.log(cartFoods) inside the function
  }

  useEffect(() => {
    let total = cartFoods.reduce(function (a, b) {
      return a + Number(b.quantity);
    }, 0);

    setTotalFoodAmount(total);

    // dispatch({ type: "ADD_FOOD_TOTAL", val: total });
    const totalAmount = cartFoods.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    setTotalPrice(totalAmount);
  }, [cartFoods]);

  function addMoreFood(food) {
    let addedFood = { ...food, quantity: Number(food.quantity) + 1 };
    let filtered = cartFoods.filter((c) => c.food !== addedFood.food);
    setCartFoods(filtered.concat(addedFood));
  }

  function deleteFoods(food) {
    let deletedFood = { ...food, quantity: Number(food.quantity) - 1 };
    let filtered = cartFoods.filter((c) => c.food !== deletedFood.food);
    setCartFoods(filtered.concat(deletedFood));
    console.log(food);
  }

  return (
    <div className="App">
      <NavHeader cartQuantity={totalFoodAmount} setDisplay={setDisplay} />
      <FoodList addFood={addFood} setAmount={setQuantity} />
      <CartModal
        cartFoods={cartFoods}
        closeModal={removeModal}
        totalPrice={totalPrice}
        addFood={addMoreFood}
        deleteFood={deleteFoods}
      />
    </div>
  );
}

export default App;
