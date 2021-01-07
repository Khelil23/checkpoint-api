import { useState, useEffect } from "react";
import UserCard from "./UserCard";
const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(/*(res) => console.log(res)*/(res) =>setListOfUSer(res.data))
    //   .catch(err=>console.log(err))
  }, [axios]);
  return (
    <div>
      {listOfUSer.map((el, i) => (
        <UserCard key={i} user={el} />
      ))}
    </div>
  );
};
export default UserList;