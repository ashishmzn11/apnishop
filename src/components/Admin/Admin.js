// import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

function Admin() {
  return (
    <>
            <main className="container mt-5">
              <Signup />
              {/* <Signin/> */}
            </main>
    </>
  );
}
export default Admin;
