// Import React and any other necessary components/libraries
import React from 'react';

// Your page component
export default function Page() {
  return (
    <div className="container mx-auto bg-white">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Starterpedia</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Leaderboard
          </a>
          <a href="#" className="hover:text-gray-300">
            Bookmarks
          </a>
          <a href="#" className="hover:text-gray-300">
            Advertise
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Discover the world's top designers & creatives
        </h1>
        <p className="text-sm mb-8 text-black">
          Find talents and connect with a creative people
        </p>
        <div className="flex items-center">
          <div className="flex items-center border border-gray-300 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-3 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m-1-7a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"
              />
            </svg>
            <input
              type="text"
              className="border-none outline-none w-full text-black"
              placeholder="Filter by name"
              // You can add more input properties, event handlers, and state management as needed
            />
          </div>
          {/* Add your search button or additional search functionality here */}
        </div>
      </div>


     <div className="bg-gray-800 text-white p-4 text-center flex">
        {/* Left column */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold mb-2">Starterpedia</h2>
          <p className="text-white-600">
            The best of breeders
            </p>
            <p className="text-white-600">
            Subscribe to our newsletter and get the best resources every week
          </p>
          <form className="flex items-center mb-2">
            <textarea
              className="border p-2 mr-2 w-48 h-16"
              placeholder="Enter Email"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle column (empty space for separation) */}
        <div className="flex-1"></div>

        {/* Right column (additional content if needed) */}
        <div className="flex-1">
          {/* Add any content for the right column if needed */}
        </div>
      </div>
    </div>
  );
}
