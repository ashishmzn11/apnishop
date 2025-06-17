import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ initialTotal }) {
  const navigate = useNavigate();
  const location = useLocation(); // to get current path

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <h1 className="me-5 text-white cursor-pointer"onClick={() => navigate("/")}>Apni Shop</h1>
        <div className="d-flex" role="search">
          {/* Show Calculator button only if not already on /calculator */}
          {location.pathname !== "/calculator" && (
            <button
              className="form-control btn-outline-success me-2 w-auto"
              onClick={() => navigate("/calculator")}
            >
              <span className="me-2">Calculator</span>
            </button>
          )}

          {/* Always show Admin button */}
          <button className="form-control btn-outline-success me-2 w-auto">
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
