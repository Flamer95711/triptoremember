"use client"

import { useActionState } from "react"
import { diaryCreationAction } from '@/app/actions/diary';

export default function DairyCreation() {
    const initialState = {success:false,error:null}
    const [state,formAction] = useActionState(diaryCreationAction,initialState)
    
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Diary Entry</h1>
                        <p className="text-gray-600">Capture your memories and thoughts</p>
                    </div>

                    <form action={formAction} className="space-y-6">
                        {/* Title Field */}
                        <div className="space-y-1">
                            <label htmlFor="title" className="text-sm font-medium text-gray-700 block">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    placeholder="Enter your diary title"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-black"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content Field */}
                        <div className="space-y-1">
                            <label htmlFor="content" className="text-sm font-medium text-gray-700 block">
                                Content <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={8}
                                    placeholder="Write your diary entry here... Share your thoughts, experiences, and memories."
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-vertical"
                                />
                                <div className="absolute top-3 right-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Location Field */}
                        <div className="space-y-1">
                            <label htmlFor="location" className="text-sm font-medium text-gray-700 block">
                                Location <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="location"
                                    type="text"
                                    name="location"
                                    placeholder="Where are you writing from?"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Cover Image Field */}
                        <div className="space-y-1">
                            <label htmlFor="coverImage" className="text-sm font-medium text-gray-700 block">
                                Cover Image URL
                            </label>
                            <div className="relative">
                                <input
                                    id="coverImage"
                                    type="url"
                                    name="coverImage"
                                    placeholder="https://example.com/image.jpg (optional)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Additional Images Field */}
                        <div className="space-y-1">
                            <label htmlFor="images" className="text-sm font-medium text-gray-700 block">
                                Additional Images
                            </label>
                            <div className="relative">
                                <textarea
                                    id="images"
                                    name="images"
                                    rows={3}
                                    placeholder="Enter image URLs separated by new lines (optional)&#10;https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-vertical"
                                />
                                <div className="absolute top-3 right-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">Enter one image URL per line</p>
                        </div>

                        {/* Weather Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label htmlFor="weather" className="text-sm font-medium text-gray-700 block">
                                    Weather
                                </label>
                                <div className="relative">
                                    <select
                                        id="weather"
                                        name="weatherAtTime"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                    >
                                        <option value="">Select weather (optional)</option>
                                        <option value="sunny">☀️ Sunny</option>
                                        <option value="cloudy">☁️ Cloudy</option>
                                        <option value="rainy">🌧️ Rainy</option>
                                        <option value="snowy">❄️ Snowy</option>
                                        <option value="windy">💨 Windy</option>
                                        <option value="stormy">⛈️ Stormy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Setting */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 block">
                                Privacy Setting
                            </label>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="isPublic"
                                        value="false"
                                        defaultChecked
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Private
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="isPublic"
                                        value="true"
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
                                    />
                                    <span className="ml-2 text-sm text-gray-700 flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                        Public
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-purple-200 focus:outline-none shadow-lg"
                        >
                            Create Diary Entry
                        </button>

                        {/* Error and Success Messages */}
                        {state.error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
                                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-red-700 text-sm">{state.error}</p>
                            </div>
                        )}

                        {state.success && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-green-700 text-sm">Diary entry created successfully!</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </main>
    )
}