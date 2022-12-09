import React, { useEffect, useState } from "react";
import { fetchMusic } from "../../API/FetchMusic";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/user";

  useEffect(() => {
    const users = async () => {
      const data = await fetchMusic(url);
      setUsers(data);
      console.log(data);
    };
    users();
  }, [url]);
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
