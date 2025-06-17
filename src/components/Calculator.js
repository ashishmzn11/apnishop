// CalculatorPage.js
import React from "react";
import Product from "./Product";

function CalculatorPage({ productList, incrementquantity, DecrementQuantity ,initialTotal}) {
  return (
    <div className="container mt-4">
        <Product
          incrementquantity={incrementquantity}
          DecrementQuantity={DecrementQuantity}
          productList={productList}
          initialTotal={initialTotal}
        />
    </div>
  );
}

export default CalculatorPage;
