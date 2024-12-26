"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from 'react-redux';
import store from './store';
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
        <div className="flex">
          <Sidebar
            handleItemClick={handleItemClick}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <div className="sm:ml-[2px] bg-gray-100 min-h-screen flex-1">
            <Header activeItem={activeItem} />
            {children}
          </div>
        </div>
        </Provider>
      </body>
    </html>
  );
}
