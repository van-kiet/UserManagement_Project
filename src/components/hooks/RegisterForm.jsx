import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addUserAction,
  updateUserAction,
} from "../../store/actions/hookAction";
export default function RegisterForm() {
  const hookReducer = useSelector((state) => state.hookReducer);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  });

  const [error, setError] = useState({
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "",
  });
  useEffect(() => {
    setValues(hookReducer.selectedUser);
  }, [hookReducer.selectedUser]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleBlur = (event) => {
    let message = "";
    const { name, validity, title, minLength, maxLength } = event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} is required.`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength}-${maxLength} characters`;
    }

    if (patternMismatch) {
      message = `${title} is invalid pattern`;
    }

    setError({
      ...error,
      [name]: message,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = event.target.checkValidity();

    if (!isValid) {
      return;
    }
    if (hookReducer.selectedUser) {
      dispatch(updateUserAction(values));
    } else {
      dispatch(addUserAction(values));
    }
  };

  const {
    username = "",
    email = "",
    phoneNumber = "",
    password = "",
    type = "",
    fullName = "",
  } = values || {};
  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        {/* onSubmit chạy khi trong form có button có type là submit */}
        <form noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  value={username}
                  title="Username"
                  required
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{error.username}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  value={fullName}
                  title="Full name"
                  required
                  minLength={5}
                  maxLength={10}
                  name="fullName"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{error.fullName}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  value={password}
                  title="Password"
                  required
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{error.password}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  value={phoneNumber}
                  title="Phone number"
                  required
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <span className="text-danger">{error.phoneNumber}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>

                <input
                  value={email}
                  title="Email"
                  required
                  type="text"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{error.email}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  value={type}
                  type="Type"
                  required
                  className="form-control"
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Client</option>
                  <option>Admin</option>
                </select>
                <span className="text-danger"></span>
              </div>
            </div>
          </div>

          <div className="card-footer text-muted">
            <button className="btn btn-warning mr-2">SAVE</button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
