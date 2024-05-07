import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Food from "./pages/Food";
import Fooddata from "./pages/Fooddata";
import Home from "./pages/Home";

function App() {
  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    setproduct(Fooddata);
  }, []);

  const addCart = (item) => {
    setcart((prevCart) => [...prevCart, item]);
  };

  const removeCart = (index) => {
    setcart((prevCart) => prevCart.filter((e,i) => i!==index ))
  };

  const calcTotal = () =>{
    let total = 0
    cart.forEach(e => total = total + parseInt(e.price) )
    return total.toFixed(2)
  }

  const clearCart = (item) => {
    setcart([]);
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/cart">Cart : {cart.length} </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/food"
            element={<Food product={product} addCart={addCart} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart cart={cart} clearCart={clearCart} calcTotal={calcTotal} removeCart={removeCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
