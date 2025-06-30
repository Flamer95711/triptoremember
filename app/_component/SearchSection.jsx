"use client"
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { Badge, Input, Select, Space } from "antd";
import React from "react";

const options = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
  { value: "X", label: "X" },
];
const SearchSection = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "auto",
        gap: "20px",
      }}
    >
      <Space.Compact size="large">
         <Select defaultValue="home" options={options} />
        <Input.Search placeholder="Search" />
      </Space.Compact>
      <Badge count={1}>
        <BellOutlined style={{ fontSize: "24px" }} />
      </Badge>
      <SettingOutlined />
    </div>
  );
};

export default SearchSection;
