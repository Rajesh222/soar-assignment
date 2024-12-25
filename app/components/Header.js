
"use client"
import React from "react";
import userImg from "../assets/userImage.jpg";
import notificationImg from "../assets/notification.png";
import settingsImg from "../assets/settings_1.png";

import Image from "next/image";

const Header = ({activeItem}) => {
  return (
    <>
      <div className="sm:ml-64 ml-16 flex items-center justify-between p-4 bg-white">
        <h2 className="text-xl font-semibold text-gray-800 text-right sm:text-left">
          {activeItem || "Dashboard"}
        </h2>

        <div className="flex items-center gap-8">
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1010.5 3a7.5 7.5 0 000 15z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for something"
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              onChange={() => {}}
            />
          </div>

          <Image
            src={settingsImg}
            alt="config"
            width={40}
            height={40}
            className="cursor-pointer p-2 rounded-full bg-gray-100 hidden sm:block"
          />

          <Image
            src={notificationImg}
            alt="notification"
            width={40}
            height={40}
            className="cursor-pointer p-2 rounded-full bg-gray-100 hidden sm:block"
          />

          {/* Avatar */}
          <Image
            src={userImg}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="relative sm:hidden p-4 bg-white">
        <span className="absolute inset-y-0 left-6 flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1010.5 3a7.5 7.5 0 000 15z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for something"
          className="bg-gray-100 rounded-full w-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          onChange={() => {}}
        />
      </div>
    </>
  );
};

export default Header;
