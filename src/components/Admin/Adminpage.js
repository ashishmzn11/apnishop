import React from "react";

function Adminpage() {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="mb-4">Admin Product List</h2>
      
      <table className="table table-bordered table-striped">
        <thead className="table-success sticky-top">
          <tr>
            <th scope="col" className="col-1">#</th>
            <th scope="col" className="col-4">PName</th>
            <th scope="col" className="col-3">Price</th>
            <th scope="col" className="col-4">Kg/Gm</th>
          </tr>
        </thead>
        <tbody>
          {/* Future: Product list rows will go here */}
        </tbody>
      </table>
    </div>
  );
}

export default Adminpage;
