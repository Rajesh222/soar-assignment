"use client";
import React, { useState } from "react";
import userImg from "../assets/userImage.jpg";
import Image from "next/image";

const Setting = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    permanentAddress: "",
    postalCode: "",
    username: "",
    presentAddress: "",
    city: "",
    country: "",
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userImg);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one number."
      );
      return;
    }

    const formDataToSubmit = {
      ...formData,
      email,
      password,
      country: formData.country,
      profileImage: selectedFile,
    };

    try {
      const response = await fetch("https://api.example.com/update-profile", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one number."
      );
    } else {
      setPasswordError("");
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="sm:ml-64 ml-2 grid grid-cols-1 gap-6 pl-6 pr-6 pt-6">
      <div className="p-8 bg-white rounded-lg shadow-md mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-3 flex justify-center md:justify-start">
            <div className="flex space-x-6 mb-6">
              <div className="relative">
                <button className="absolute top-[54px] right-0 bg-black text-white text-xs rounded-full p-1">
                  ✏️
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute right-0 opacity-0 w-full h-full cursor-pointer"
                />
                <Image
                  src={previewUrl}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {formData.name}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-9">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  />

                  <label className="block text-sm text-gray-700 mt-4">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600">{emailError}</p>
                  )}

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

                <div>
                  <label className="block text-sm text-gray-700">
                    User Name
                  </label>
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
                    value={password}
                    onChange={handlePasswordChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {passwordError && (
                    <p className="mt-2 text-sm text-red-600">{passwordError}</p>
                  )}

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

                  <label className="block text-sm text-gray-700 mt-4">
                    City
                  </label>
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

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
