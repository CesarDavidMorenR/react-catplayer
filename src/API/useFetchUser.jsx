import { useState, useEffect } from "react";

const useFetchUser = () => {
  const urlUsers = "http://localhost:8000/user";

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlUsers);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlUsers]);

  function getAllUsers() {
    return users;
  }

  function getUser(username) {
    return users.find((user) => user.username === username);
  }

  function addNewUser(user) {
    fetch(urlUsers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  return {
    error,
    loading,
    users,
    setUsers,
    getAllUsers,
    getUser,
    addNewUser,
  };
};

export default useFetchUser;
