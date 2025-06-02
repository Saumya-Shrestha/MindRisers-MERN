import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const params = useParams();
  console.log(params);

  const { id, username, age } = params;

  return (
    <>
      <div className='container py-5'>
        <h4>This is User Detail Page</h4>
        <h6>User ID: {id}</h6>
        <h6>User Name: {username}</h6>
        <h6>User Age: {age}</h6>
      </div>
    </>
  );
};

export default UserDetail;
