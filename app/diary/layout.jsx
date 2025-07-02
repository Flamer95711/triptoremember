import React from "react";
import { logoutAction } from "../actions/auth";
import LogoutButton from "../_component/LogoutButton";

export default function DiaryLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stylish Navbar */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 shadow-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Title Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight pt-4">
                Diary Section
              </h1>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* Logout Button */}
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
