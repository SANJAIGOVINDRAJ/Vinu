import React from "react";
import { Outlet } from "react-router-dom";

const AuthenticationPage = () => {
  return (
    <div className=" relative bg-violet-700 max-w-screen min-h-screen overflow-hidden ">
      <div>
      <div className=" absolute right-40 top-24">
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
