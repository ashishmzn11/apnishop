import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Signin() {
  const [user,setuser]=useState("");
  const [pass,setpass]=useState("");
  const navigate = useNavigate();

  let handleSubmit=(e)=>{
 e.preventDefault();
if(user==="Ashishmzn11"&&pass==="AS2003"){

  navigate("/Adminpage");
}
else{
  alert("invalide passward");
}
  }
  return (
    <><div className="container mt-5 pt-4">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="border border-dark rounded p-3 w-50">
            <h4 className="d-flex justify-content-center align-items-center mb-5 mt-3 bg-success text-white p-3">
              ApniShop administration{" "}
            </h4>
            <div className="col-12">
              <div class="mb-3">
                <label for="username" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  onChange={(e)=>setuser(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="col-12">
              <div class="mb-3">
                <label for="password" class="form-label">
                  User password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  onChange={(e)=>setpass(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
            </div>
              <button type="submit" className="btn btn-success col-12">
              Sign In
            </button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
}
export default Signin;
