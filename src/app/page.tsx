// Import React and any other necessary components/libraries
import React from 'react';
import DesignerInfo from './DesignerInfo';
import { Twitter, Youtube, GitHub } from 'react-feather';

// Your page component
export default function Page() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:underline focus:underline">
          Starterpedia
        </a>
        <nav className="flex space-x-4">
          <a href="Leaderboard" className="hover:text-gray-300">
            Leaderboard
          </a>
          <a href="Bookmarks" className="hover:text-gray-300">
            Bookmarks
          </a>
          <a href="Advertise" className="hover:text-gray-300">
            Advertise
          </a>
          <a href="About" className="hover:text-gray-300">
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
        <h1 className="text-4xl font-bold mb-4 text-black font-serif italic tracking-wide leading-relaxed">
          Discover the world top designers & creatives
        </h1>
        <p className="text-sm mb-8 text-black font-serif italic tracking-wide leading-relaxed">
          Find talents and connect with creative people.
        </p>
        <div className="flex items-center mb-4 transition-transform duration-300 ease-in-out transform">
          <div className="relative mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute h-4 w-5 text-gray-500 left-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out"
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
              className="pl-8 pr-4 py-2 border-none outline-none w-full text-black rounded-full bg-gray-100 focus:ring focus:ring-blue-400"
              placeholder="Filter by name"
              // You can add more input properties, event handlers, and state management as needed
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-8 bg-white rounded-md overflow-hidden shadow-md p-8">
        <DesignerInfo name="Tom Ford" photoUrl="/TomFord.png" />
      </div>

      <div className="bg-gray-800 text-white p-4 text-center flex" style={{ paddingLeft: '7rem' }}>
        {/* Left column */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold mb-2">Starterpedia</h2>
          <p className="text-white-600">The best of breeders</p>
          <p className="text-white-600 max-w-sm">
            Subscribe to our newsletter and get the best resources every week
          </p>
          <br />
          <form className="flex items-center mb-2">
            <input
              type="text"
              className="border-none outline-none w-3/5 h-10 text-black"
              placeholder="Enter Email"
              // You can add more input properties, event handlers, and state management as needed
            />
            <button type="submit" className="bg-green-500 text-white px-3 py-2">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-xl font-bold mb-2">Links</h1>
          <p className="text-white-600">
            <a href="#" className="flex items-center mb-1 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="flex items-center mb-1 hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="flex items-center mb-1 hover:text-gray-300">
              About
            </a>
            <a href="#" className="flex items-center mb-1 hover:text-gray-300">
              Terms and conditions
            </a>
            <a href="#" className="flex items-center mb-1 hover:text-gray-300">
              Our resources
            </a>
          </p>
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-xl font-bold mb-2">Follow Us</h1>
          <p className="text-white-600">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 hover:text-gray-300"
            >
              <Twitter className="h-6 w-6 mr-2" />
              Twitter
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 hover:text-gray-300"
            >
              <Youtube className="h-6 w-6 mr-2" />
              Youtube
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-300"
            >
              <GitHub className="h-6 w-6 mr-2" />
              GitHub
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 hover:text-gray-300"
            >
              Telegram
            </a>
            <a
              href="https://www.reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 hover:text-gray-300"
            >
              Reddit
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm mb-2">© 2024 Starterpedia. All rights reserved.</p>
      </div>
    </div>
  );
}
