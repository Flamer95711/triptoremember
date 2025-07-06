"use client";

import { useState } from "react";
import { Button, Avatar, Tag, Tooltip, Space } from "antd";
import {
  UserOutlined,
  MailOutlined,
  HeartOutlined,
  MessageOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

export default function UserProfileCard({ user, isModal = false, onClose }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        {/* Background Gradient */}
        <div className="h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 relative">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute top-8 left-8 w-10 h-10 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full"></div>

          {/* Close Button (Modal only) */}
          {isModal && (
            <Button
              icon={<CloseOutlined />}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 border-0 bg-white/20 hover:bg-white/30 text-white"
              shape="circle"
              size="large"
            />
          )}
        </div>

        {/* Profile Avatar */}
        <div className="absolute -bottom-12 left-6">
          <div className="relative">
            <Avatar
              size={96}
              src={avatarUrl}
              className="border-4 border-white shadow-lg"
            />
            {/* Online Status */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="pt-16 pb-6 px-6">
        {/* User Information */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <Space>
              <Tooltip title={isFollowing ? "Unfollow" : "Follow"}>
                <Button
                  type={isFollowing ? "default" : "primary"}
                  icon={isFollowing ? <CheckOutlined /> : <HeartOutlined />}
                  onClick={handleFollowClick}
                  className={`${
                    isFollowing
                      ? "bg-gray-100 border-gray-300 text-gray-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              </Tooltip>
              <Tooltip title="Message">
                <Button
                  icon={<MessageOutlined />}
                  className="bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                />
              </Tooltip>
            </Space>
          </div>

          <p className="text-purple-600 font-medium mb-2 flex items-center">
            <UserOutlined className="mr-1" />@{user.username}
          </p>

          <p className="text-gray-600 text-sm flex items-center">
            <MailOutlined className="mr-2" />
            {user.email}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">42</div>
            <div className="text-xs text-gray-600 font-medium">Posts</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200">
            <div className="text-2xl font-bold text-pink-600 mb-1">1.2K</div>
            <div className="text-xs text-gray-600 font-medium">Followers</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
            <div className="text-2xl font-bold text-indigo-600 mb-1">234</div>
            <div className="text-xs text-gray-600 font-medium">Following</div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">About</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            ✨ Creative developer passionate about building amazing user
            experiences. Love working with modern web technologies and design
            systems.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Skills & Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Design",
              "UI/UX",
              "Ant Design",
            ].map((skill, index) => (
              <Tag
                key={index}
                className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200 rounded-full px-3 py-1"
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              {
                action: "Published a new post",
                time: "2 hours ago",
                color: "purple",
              },
              { action: "Liked 5 posts", time: "1 day ago", color: "pink" },
              {
                action: "Followed 3 users",
                time: "2 days ago",
                color: "indigo",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-2 h-2 bg-${activity.color}-500 rounded-full`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Member since Jan 2023</span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
