"use client";
import React, { useState } from "react";
import userImg from "../assets/userImage.jpg";
import Image from "next/image";

const Setting = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    email: "charlenereed@gmail.com",
    dob: "1990-01-25",
    permanentAddress: "San Jose, California, USA",
    postalCode: "45962",
    username: "Charlene Reed",
    password: "********",
    presentAddress: "San Jose, California, USA",
    city: "San Jose",
    country: "USA",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit handler (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="sm:ml-64 ml-2 grid grid-cols-1 gap-6 pl-6 pr-6 pt-6">
      <div className="p-8 bg-white rounded-lg shadow-md mb-8">
        {/* Tabs */}
        <div className="flex space-x-8 border-b pb-3 mb-6">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">
            Edit Profile
          </button>
          <button className="text-gray-500 hover:text-gray-800 pb-2">
            Preferences
          </button>
          <button className="text-gray-500 hover:text-gray-800 pb-2">
            Security
          </button>
        </div>

        <div className="flex items-center space-x-6 mb-6">
          <div className="relative">
            <Image
              src={userImg}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-full p-1">
              ✏️
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {formData.name}
            </h3>
            <p className="text-sm text-gray-500">Edit your personal details</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-sm text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-sm text-gray-700">User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Present Address
              </label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />

              <label className="block text-sm text-gray-700 mt-4">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
