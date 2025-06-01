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

  const handleUser = (userId, userName, userAge) => {
    console.log("You clicked on user: ", userName);
    navigate(`${userId}/${userName}/${userAge}`);
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
                onClick={() => handleUser(user._id, user.name, user.age)}
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
