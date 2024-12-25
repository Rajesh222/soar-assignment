"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import investmentImg from "../assets/investment.png";
import homeImg from "../assets/home-icon.png";
import userImg from "../assets/user.png";
import logoImg from "../assets/logo.png";
import creditCardImg from "../assets/credit-card.png";
import loanImg from "../assets/loan.png";
import serviceImg from "../assets/service.png";
import privillageImg from "../assets/privillage.png";
import settingsImg from "../assets/settings.png";
import transactionImg from "../assets/transaction.png";
import Link from "next/link";

const Sidebar = ({handleItemClick, activeItem}) => {
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className="fixed top-0 left-0 sm:h-full w-30 sm:w-64 transition-width duration-300 bg-white p-4">
      <Link href="/">
        <div className={`flex items-center p-4 hidden sm:flex`}>
          <Image src={logoImg} alt="Investment" width={24} height={24} />
          <h2 className="text-2xl font-bold ml-4 flex">Soar Tech</h2>
        </div>
      </Link>
      <button
        className="p-[8px] sm:p-4 flex sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
      </button>
      <nav className={`mt-4 sm:flex ${isOpen ? "flex" : "hidden"}`}>
        <ul>
          <Link href="/">
            <li
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                activeItem === "Dashboard" ? "bg-gray-200 rounded-2xl" : ""
              }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <Image src={homeImg} alt="Investment" width={24} height={24} />
              <span className="ml-4 sm:block">Dashboard</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image
                src={transactionImg}
                alt="Investment"
                width={24}
                height={24}
              />
              <span className="ml-4 sm:block">Transaction</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image src={userImg} alt="Investment" width={24} height={24} />
              <span className="ml-4 sm:block">Accounts</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image
                src={investmentImg}
                alt="Investment"
                width={24}
                height={24}
              />
              <span className="ml-4 sm:block">Investment</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image
                src={creditCardImg}
                alt="Investment"
                width={24}
                height={24}
              />
              <span className="ml-4 sm:block">Credit Cards</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image src={loanImg} alt="Investment" width={24} height={24} />
              <span className="ml-4 sm:block">Loans</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image src={serviceImg} alt="Investment" width={24} height={24} />
              <span className="ml-4 sm:block">Services</span>
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              <Image
                src={privillageImg}
                alt="Investment"
                width={24}
                height={24}
              />
              <span className="ml-4 sm:block">My Privileges</span>
            </li>
          </Link>
          <Link href="/setting">
            <li
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${
                activeItem === "Setting" ? "bg-gray-200 rounded-2xl" : ""
              }`}
              onClick={() => handleItemClick("Setting")}
            >
              <Image
                src={settingsImg}
                alt="Investment"
                width={24}
                height={24}
              />
              <span className="ml-4 sm:block">Setting</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
