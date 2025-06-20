import { useState } from "react";
function Signup() {
  const [Phone, setPhone] = useState("");
  const [Error, setError] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);

      if (value.length > 10) {
        setError("Invalid number! Must be exactly 10 digits.");
      } else if (value.length === 10) {
        setError("");
      } else {
        setError("Phone number must be 10 digits.");
      }
    }
  };

  return (
    <>
    <div className="container mt-5">
      <from>
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
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-12">
              <div class="mb-2">
                <label for="Gmail" class="form-label">
                  User email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-12">
              <div class="mb-2">
                <label for="password" class="form-label">
                  User password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-2">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">+91</span>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                    value={Phone}
                    onChange={handleChange}
                    maxLength="10"
                  />
                </div>
                {Error && <div className="form-text text-danger">{Error}</div>}
              </div>
            </div>

            <div className="col-12">
              <div class="mb-2">
                <label for="city" class="form-label">
                  User city
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Enter your city"
                />
              </div>
            </div>
               <button className="btn col-12 d-flex justify-content-center align-items-center bg-success text-white p-3 mb-3">Sign UP</button>
          </div>
        </div>
      </from>
      </div>
    </>
  );
}
export default Signup;
