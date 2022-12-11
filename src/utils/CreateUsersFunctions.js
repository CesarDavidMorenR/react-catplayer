import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FetchUser from "./../API/FetchUser";
import FetchCreateUsers from "./../API/FetchCreateUsers";

const CreateUsersFunctions = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  /*     const [errors,setErrors] = useState({}) */

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/Users";

  useEffect(() => {
    const connection = async () => {
      const data = await FetchUser(url);
      setUsers(data);
    };
    connection();
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExist = users.map((user) => {
      if (user.username === form.username) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      console.log("user exist");
      navigate("/");
    } else {
      FetchCreateUsers(form);
      console.log("user not exist");
      navigate("/");
    }
  };

  return {
    form,
    handleInput,
    handleSubmit,
  };
};

export default CreateUsersFunctions;
