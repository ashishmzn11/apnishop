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
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">PName</th>
              <th scope="col">Price</th>
              <th scope="col">Kg/Gm</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.quantity * product.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2 "
                    onClick={() => {
                      DecrementQuantity(i);
                    }}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2"
                    onClick={() => {
                      incrementquantity(i);
                    }}
                  >
                    +
                  </button>
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
