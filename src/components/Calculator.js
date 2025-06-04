// CalculatorPage.js
import React from "react";
import Product from "./Product";

function CalculatorPage({ productList, incrementquantity, DecrementQuantity }) {
  return (
    <div className="container mt-4">
        <Product
          incrementquantity={incrementquantity}
          DecrementQuantity={DecrementQuantity}
          productList={productList}
        />
        fgdfgk
    </div>
  );
}

export default CalculatorPage;
