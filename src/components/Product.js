import React from "react";
function Product({ productList,product ,incrementquantity,index,DecrementQuantity}) {
  
  return (<>
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


   
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">PName</th>
            <th scope="col">Price</th>
            <th scope="col">Kg/Gm</th>
            <th scope="col">Learn More</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              
              <button>know more</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  );
}
export default Product;
