import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Calculator from "./components/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const initialProductList = [
    { name: "coldrink", price: 60, quantity: 1 },
    { name: "namkin", price: 20, quantity: 1 },
    { name: "chocklet", price: 60, quantity: 1 },
  ];

  const [productList, setProductList] = useState(initialProductList);

  const [calcProductList, setCalcProductList] = useState(
    JSON.parse(JSON.stringify(initialProductList)) 
  );
  useEffect(() => {
    const newCalcList = productList.map((item) => ({
      ...item,
      quantity: 1, 
    }));
    setCalcProductList(newCalcList);
  }, [productList]);

  const incrementQuantity = (index) => {
    const newList = [...calcProductList];
    newList[index].quantity += 1;
    setCalcProductList(newList);
  };

 
  const DecrementQuantity = (index) => {
    const newList = [...calcProductList];
    if (newList[index].quantity > 1) {
      newList[index].quantity -= 1;
      setCalcProductList(newList);
    }
  };

  const removeitem = (index) => {
    const newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList); 
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Calculator Page */}
        <Route
          path="/calculator"
          element={
            <Calculator
              productList={calcProductList}
              incrementquantity={incrementQuantity}
              DecrementQuantity={DecrementQuantity}
            />
          }
        />

        {/* Home Page */}
        <Route
          path="/"
          element={
            <main className="container mt-5">
              <ProductList
                productList={productList}
                removeitem={removeitem}
              />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
