"use client";

import React from "react";
import { Layout } from "antd";
import DropDownMenu from "./DropDownMenu";
import SearchSection from "./SearchSection";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        padding: "10px 15px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <DropDownMenu />
      <SearchSection />
    </Header>
  );
};

export default Navbar;
