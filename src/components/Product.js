import React from "react";
function Product({
  productList,
  initialTotal,
  incrementquantity,
  DecrementQuantity,
}) {
  return (
    <>
      {/* <div className="row">
      <div className="col-5">
        <h1>
          {product.name}
          <p1 className="	ms-4">₹{product.price}</p1>
        </h1>
      </div>
      <div className="col-4">
        <button type="button" className="btn btn-outline-primary " onClick={()=>{DecrementQuantity(index)}}>
          -
        </button>
        <button type="button" className="btn btn-secondary ms-4 me-4" >
         {product.quantity}
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>{incrementquantity(index)}}>
          + 
        </button>
      </div>
      <div className="col-3">{product.quantity * product.price}</div>
    </div> */}

      <div className="row">
        <table className="table">
          <thead className="col-12">
            <tr>
              <th scope="col" className="col-1"></th>
              <th scope="col" className="col-2">PName</th>
              <th scope="col" className="col-2">Price</th>
              <th scope="col" className="col-2">Kg/Gm</th>
              <th scope="col" className="col-2">ADD</th>
            </tr>
          </thead>
          <tbody className="col-12">
            {productList.map((product, i) => (
              <tr key={i}>
                <th className="col-1" scope="row">{i + 1}</th>
                <td className="col-2">{product.name}</td>
                <td className="col-2">{product.quantity * product.price}</td>
                <td className="col-2">
                  <button
                    type="button"
                    className="btn btn-danger mx-2 "
                    onClick={() => {
                      DecrementQuantity(i);
                    }}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    className="btn btn-success mx-2"
                    onClick={() => {
                      incrementquantity(i);
                    }}
                  >
                    +
                  </button>
                  <td>
                   <button
                    type="button"
                    className="btn btn-success mx-2  col-2"
                  >
                    Add
                  </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button type="button" className="btn btn-outline-primary " onClick={()=>{DecrementQuantity(index)}}>
          -
        </button>
        <button type="button" className="btn btn-secondary ms-4 me-4" >
         {product.quantity}
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>{incrementquantity(index)}}>
          + 
        </button> */}

        <div className="row">
          <div className="col-4 mt-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Total Amount</h1>
              <h1>
                {productList.reduce(
                  (total, product) => total + product.quantity * product.price,
                  0
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
