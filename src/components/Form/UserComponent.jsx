import React, { useEffect, useState } from "react";
import useFetchApi from "../../API/useFetchAPI";


const UserContainer = () => {
  const {users} = useFetchApi();


  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.profilePicture} alt={user.isLoggedin} />
            <div>
              <h3>{user.email}</h3>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default UserContainer;
