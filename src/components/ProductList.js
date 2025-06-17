import React from "react";

function ProductList({ productList, removeitem }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td> {/* 👈 Only quantity shown here */}
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeitem(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        <div className="col-4 mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Total Amount</h1>
            <h1>
              ₹
              {productList.reduce(
                (total, product) => total + product.quantity * product.price,
                0
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
