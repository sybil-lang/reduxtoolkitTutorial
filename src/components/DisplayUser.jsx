import React from 'react';
import { useSelector } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  console.log("data us", data);
  const handleDelete = (id) => {
    dispatch(removeUser(id));  //calling micro-reducer in the state using dispatch
  } 

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Action</th>

        </tr>
      </thead>
      <tbody>
        {data.map((user, id) => {
          return (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{user}</td>
              <td>
                <a onClick={() => handleDelete(id)}  style={{ cursor: 'pointer' }}>
                  <RiDeleteBin5Line />
                </a>
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayUser;
