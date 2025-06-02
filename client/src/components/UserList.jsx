import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const users = [
    {
      _id: 1,
      name: "John",
      age: 25,
    },
    {
      _id: 2,
      name: "Anna",
      age: 30,
    },
    {
      _id: 3,
      name: "Peter",
      age: 35,
    },
    {
      _id: 4,
      name: "Linda",
      age: 40,
    },
  ];

  const handleUser = (user) => {
    console.log("You clicked on user: ", user.name);
    navigate(`${user._id}/${user.name}/${user.age}`);
  };

  return (
    <>
      <div className="container py-5">
        <h4>Our User List</h4>
        <ul>
          {users.map((user) => {
            return (
              <li
                key={user._id}
                onClick={() => handleUser(user)}
              >
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UserList;
