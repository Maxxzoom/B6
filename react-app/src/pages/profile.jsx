import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [users, setUsers] = useState("");
  //  useEffect(() => {
  //   console.log("component profile mounted");
  // }, []);

  useEffect(() => {
    // console.log("component profile updating");
    // return () => console.log("unmounted");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users);

  // Life cycle methods
  // mounting
  // updating
  // unmount
  return (
    <div>
      Profile Page
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUsers(e.target.value)}
      />
      {users &&
        users.map(
          (user) => (
            <li >
              {user.id} - {user.name} - {user.address.geo.lat} -{" "}
              {user.address.geo.lng} - {user.phone}{" "}
            </li>
          )
          // console.log(u)
        )}
    </div>
  );
};

export default Profile;
