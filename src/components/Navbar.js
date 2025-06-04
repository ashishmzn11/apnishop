import React from 'react';
import { useNavigate } from "react-router-dom";
function Navbar({initialTotal}){
  const navigate = useNavigate();
  return(
 <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid">
    <h1 class="me-5">Apni Shop</h1>
    <div class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button class="form-control btn-outline-success me-2 w-auto"onClick={() => navigate("/calculator")} ><span class="me-2">calculator</span>{initialTotal}</button>
        <button class="form-control btn-outline-success me-2 w-auto">Admin</button>
      </div>
  </div>
</nav>
  );


}
export default Navbar;