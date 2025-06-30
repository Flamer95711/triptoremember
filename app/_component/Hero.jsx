"use client";
import React from "react";
import CustomFilter from "./CustomFilter";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <CustomFilter />
      </div>
    </div>
  );
};

export default Hero;
