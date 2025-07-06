"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDiary } from "../contexts/AppContext";
import NoComponentFound from "../_component/NoComponentFound";
const URL = process.env.NEXT_PUBLIC_DAIRY_API_URL;

const DataListPage = () => {
  const { diary, setDiary , user} = useDiary();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const fetchDiary = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      setDiary(data.data);
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };
  useEffect(() => {
    if (!diary || diary.length === 0) {
      fetchDiary();
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Data List</h1>

          <Link
            href="/diary/create"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-200"
          >
            + Add New
          </Link>
        </div>

        <div className="space-y-4 ">
          {!diary || diary.length === 0 ? (
            <NoComponentFound />
          ) : (
            diary.map((item, index) => (
              <Link href={`/diary/${item.slug}`} key={item.id}>
                <div
                  className="group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-200/50 hover:border-purple-200/50 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start space-x-6">
                    {/* Image Container */}
                    <div className="flex-shrink-0 relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300" />
                      {item.coverImage && item.coverImage !== "" ? (
                        <div className="relative">
                          <Image
                            src={item.coverImage}
                            alt={item.title}
                            width={90}
                            height={90}
                            className="relative rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ) : (
                        <div className="relative w-22 h-22 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-purple-100 group-hover:to-pink-100">
                          <svg
                            className="w-10 h-10 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {/* Title */}
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 group-hover:from-purple-800 group-hover:via-blue-800 group-hover:to-pink-800 transition-all duration-300 leading-tight">
                            {item.title}
                          </h2>

                          {/* Location */}
                          <div className="flex items-center text-gray-600 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            <div className="relative">
                              <svg
                                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span className="font-medium tracking-wide">
                              {item.location}
                            </span>
                          </div>

                          {/* Date */}
                          <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                            <div className="flex items-center bg-gray-100 group-hover:bg-purple-100 px-3 py-1.5 rounded-full transition-colors duration-300">
                              <svg
                                className="w-4 h-4 mr-2 group-hover:text-purple-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-medium">
                                {formatDate(item.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DataListPage;
