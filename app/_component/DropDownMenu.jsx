"use client"
import { Select } from "antd";
import Image from "next/image";
import React from "react";

const home = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
  { value: "X", label: "X" },
];
const manage = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
  { value: "X", label: "X" },
];
const create = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
  { value: "X", label: "X" },
];
const kpi = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
  { value: "X", label: "X" },
];
const DropDownMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "auto",
        gap: "20px",
      }}
    >
      <Image src="/logo.png" width={150} height={100} alt="logo" />
      <Select defaultValue="home" options={home} />
      <Select defaultValue="manage" options={manage} />
      <Select defaultValue="create" options={create} />
      <Select defaultValue="kpi" options={kpi} />
    </div>
  );
};

export default DropDownMenu;
