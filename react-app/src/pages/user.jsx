import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  return <div>Viewing User Name:{name}</div>;
};

export default User;
