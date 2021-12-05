import React from "react";
import "./Layout.scss";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={"container"}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
