"use client";
import React from "react";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useDiary } from "@/app/contexts/AppContext";
import {use} from 'react'

const DiaryEntryPage = ({ params }) => {
  const diarySlug = use(params);
  const { diary } = useDiary();
  const diaryEntry = diary.find((item)=>diarySlug.diarySlug===item.slug)
  
  
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/diary"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Diary
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Entry Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Cover Image Section */}
          <div className="relative h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {diaryEntry.coverImage ? (
              <Image
                src={diaryEntry.coverImage}
                alt={diaryEntry.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h1 className="text-2xl font-light">Diary Entry</h1>
                </div>
              </div>
            )}

            {/* Privacy Badge */}
            <div className="absolute top-4 right-4">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  diaryEntry.isPublic
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {diaryEntry.isPublic ? (
                  <>
                    <Eye className="w-4 h-4 mr-1" />
                    Public
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-1" />
                    Private
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {diaryEntry.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                <span className="font-medium">
                  {formatDate(diaryEntry.createdAt)}
                </span>
              </div>

              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                <span className="font-medium">{diaryEntry.location}</span>
              </div>

              {/* <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-green-500" />
                <span className="font-medium text-xs">{diaryEntry.authorId.slice(0, 8)}...</span>
              </div> */}
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {diaryEntry.content}
                </p>
              </div>
            </div>

            {/* Weather Section (if available) */}
            {diaryEntry.weatherAtTime && (
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weather at Time
                </h3>
                <p className="text-gray-700">{diaryEntry.weatherAtTime}</p>
              </div>
            )}

            {/* Images Section */}
            {diaryEntry.images && diaryEntry.images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Images
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diaryEntry.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            {/* <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Entry ID: {diaryEntry.id}</span>
                <span>Created at {formatTime(diaryEntry.createdAt)}</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Edit Entry
          </button>
          <button className="px-6 py-3 bg-gray-600 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
            Share
          </button>
          <button className="px-6 py-3 bg-red-600 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntryPage;
