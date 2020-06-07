import React from "react";
import Dashboard from "../containers/Dashboard";

const Layout = (props) => {
  return (
    <div>
      <Dashboard>{props.children}</Dashboard>
    </div>
  );
};

export default Layout;
