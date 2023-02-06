import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  setSelectedUserAction,
} from "../../store/actions/hookAction";
import { useState } from "react";
export default function UserManagement() {
  const hookReducer = useSelector((state) => state.hookReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({ keyword: "" });
  const renderUser = () => {
    const filerUser = hookReducer.userList.filter((ele) => {
      return (
        ele.fullName.toLowerCase().indexOf(state.keyword.toLowerCase()) !== -1
      );
    });
    return filerUser.map((ele, idx) => {
      return (
        <tr key={idx} className={idx % 2 === 0 ? "bg-light" : undefined}>
          <td>{idx + 1}</td>
          <td>{ele.username}</td>
          <td>{ele.fullName}</td>
          <td>{ele.password}</td>
          <td>{ele.phoneNumber}</td>
          <td>{ele.type}</td>
          <td>
            <button
              onClick={() => setSelectedUser(ele)}
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button onClick={() => deleteUser(ele)} className="btn btn-danger">
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  const setSelectedUser = (payload) => {
    dispatch(setSelectedUserAction(payload));
  };
  const deleteUser = (payload) => {
    dispatch(deleteUserAction(payload));
  };

  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              type="text"
              placeholder="Search by full name..."
              className="form-control"
              onChange={(event) => setState({ keyword: event.target.value })}
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option>All</option>
              <option>Client</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderUser()}</tbody>
        </table>
      </div>
    </div>
  );
}
