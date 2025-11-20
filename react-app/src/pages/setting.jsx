import React, { useEffect } from "react";

const Setting = () => {
  useEffect(() => {
    console.log("component setting mounted");
  }, []);
  return <div>Setting</div>;
};

export default Setting;
