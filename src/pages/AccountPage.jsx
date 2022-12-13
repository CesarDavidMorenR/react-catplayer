import React, { useEffect, useState } from "react";
import { FetchUser } from "../API/FetchUser";

const AccountPage = () => {
  const [user, setUsers] = useState([]);
  const url = "http://localhost:8000/user";

  useEffect(() => {
    const users = async () => {
      const data = await FetchUser(url);
      setUsers(data);
      console.log(data);
    };
    users();
  }, [url]);

  return (
    <>
      <div>
        <h1>Account page</h1>
        {user.map((user) => (
          <div key={user.id}>
            <form>
              <h3>{user.first_name}</h3>
              <img src={user.profilePicture} alt="" />
            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccountPage;
