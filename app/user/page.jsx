"use client";
import React from "react";
const User = () => {
  const user = {
    name: "aek",
    email: "q@q.com",
    username: "ak",
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <div className="space-y-3">
        <div>
          <label className="font-semibold">Name:</label>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div>
          <label className="font-semibold">Email:</label>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div>
          <label className="font-semibold">Role:</label>
          <p className="text-gray-700">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
