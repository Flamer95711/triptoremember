"use client"
import { Typography } from "antd";
import React from "react";
import CustomSearch from "./CustomSearch";

const { Text } = Typography;

const filters = [
  {
    id:1,
    title: "Store",
    isDropDown: true,
    placeholder: "search a store",
    options: [
      { label: "Store A", value: "store-a" },
      { label: "Store B", value: "store-b" },
    ],
  },
  {
    id:2,
    title: "Department",
    isDropDown:true,
    placeholder: "search a department",
    options: [
      { label: "Store A", value: "store-a" },
      { label: "Store B", value: "store-b" },
    ],
  },
  {
    id:3,
    title: "Role",
    isDropDown:true,
    placeholder: "all",
    options: [
      { label: "Store A", value: "store-a" },
      { label: "Store B", value: "store-b" },
    ],
  },
  {
    id:4,
    title: "Status",
    isDropDown:true,
    placeholder: "Active",
    options: [
      { label: "Store A", value: "store-a" },
      { label: "Store B", value: "store-b" },
    ],
  },
  {
    id:5,
    title: "Chart Search",
    isDropDown: false,
    placeholder: "search by name and email",
  },
];

const CustomFilter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:"100%"
      }}
    >
      <Typography>Staff Management</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",   
        }}
      >
      {filters.map((item)=>{
        return   <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          
        }}
        key={item.id}
      >
        <Text>{item.title}</Text>
        <CustomSearch isDropDown={item.isDropDown} placeholder={item.placeholder} options={item.options}/>
      </div>
      })}
      </div>
    </div>
  );
};

export default CustomFilter;
