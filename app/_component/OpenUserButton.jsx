"use client";

import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function OpenProfileButton(user) {

  return (
    <Link href="/user">
      <Button
        type="primary"
        icon={<UserOutlined />}
        size="large"
        className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {user.user.username ? user.user.username : "View Profile"}
      </Button>
    </Link>
  );
}
