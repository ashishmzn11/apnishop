import React from "react";
import { Link } from "react-router-dom";

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
              <td>{product.quantity}</td>
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

      <div className="row mt-3">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center border p-3 rounded">
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

        <div className="col-md-6 d-flex justify-content-end align-items-start">
          <Link to="/AddItem">
            <button className="btn btn-success">Add more</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductList;
