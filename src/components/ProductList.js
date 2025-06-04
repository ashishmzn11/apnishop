// import React from 'react';
// import Product from '../Product';
// function ProductList({productList,incrementquantity,DecrementQuantity}){
//   return(
    
//  productList.map((product,i)=>{
//   return <Product product={product} key={i} incrementquantity={incrementquantity} index={i} DecrementQuantity={DecrementQuantity} />
//  })
//   );

// }
// export default ProductList;
import React from 'react';

function ProductList({ productList }) {
  return (
    <>
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

export default ProductList;