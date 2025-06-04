import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Calculator from "./components/Calculator";
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const initialProductList = [
    { name: 'coldrink', price: 20, quantity:1 },
    { name: 'namkin', price: 40, quantity: 1},
    { name: 'chocklet', price: 60, quantity: 1 }
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [totalamt, settotalamt] = useState(0);
  // const initialTotal = initialProductList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let initialTotal = 0;
for (let i = 0; i < initialProductList.length; i++) {
  initialTotal += initialProductList[i].price * initialProductList[i].quantity;
}

  

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalamt=totalamt;
    newtotalamt+=newProductList[index].price;
    newProductList[index].quantity++;
    setProductList(newProductList);
    settotalamt(newtotalamt);
  };
  const DecrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalamt=totalamt;
    newProductList[index].quantity>0?newProductList[index].quantity--:newProductList[index].quantity=0;
    if(newProductList[index].quantity>0){
       newProductList[index].quantity--;
       newtotalamt-=newProductList[index].price

    }

    setProductList(newProductList);
    settotalamt(newtotalamt);
  };

  return (
    <> 
    <Router>
      <Navbar initialTotal={initialTotal} />
      <Routes>
        <Route
          path="/calculator"
          element={
            <Calculator
              productList={productList}
              incrementquantity={incrementQuantity}
              DecrementQuantity={DecrementQuantity}
            />
          }
        />
        <Route
          path="/"
          element={<main className="container mt-5">
        <ProductList productList={productList} incrementquantity={incrementQuantity} DecrementQuantity={DecrementQuantity}/>
      </main>}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;

