'use client'
import React from "react";
import send from "../assets/send.png";
import Image from "next/image";


const QuickTransfer = () => {
  const senders = [
    {
      name: "Livia Bator",
      role: "CEO",
      image:
        "https://s3-alpha-sig.figma.com/img/a0bd/5a15/758288ff5165913073569be101d5c4fb?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCQmTdpybovvvEYK6t4cEOE8tVrq0aLtWmYYxffZyEpsOQHd8KSVQ1ekuT2uxFyDwWN6f-KMMaVyxdaPFtWjYrTJDfcfl57yYYq6TipV0XAKf-50kr3rPxrYPTF8ZMim09Z255xP0oR3S7eGsgYlSAaK75MlMXXwTfX9yLo5zsXvHOKXQbxqBsdIK3Gh1mtbbdNyjxOJvlP7VS9HhSeLnbm5F6oBHNipqQDxrNbiYndkX1wDMrHUBQPrz6WQ5U1xgzZlwsxADgzdvju2ClfruXCOfHxh4U68oyitOcDjq1-RKrBrAveXojiS47Ekauk0YQzN2BBlbhvdvkLz3qx73A__",
    },
    {
      name: "Randy Press",
      role: "Director",
      image:
        "https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RL4xUPYtT9Y4JOZ1gDfjWRTxXn1RTzkoLEMDLKHU~6zuPKK2aggTqhOMHuBiGjnM47Dy2TZMyxyJla0UaQD8LuVwQJ68ye7xaI1hTxLwHbhzxZOXwglHLcppm2SnD18iw7nG7sLaqMu4Yl2QUK7KGXL1qV6WXmoILvxb45D36sfpbePdil7nZMXRTEXMyl8F0HtneFiqPY7nE9j9EbAVaUN~XFvsWwTObtXqmyCUnLWr4-R0me-f06Vpbx3jIybkfx8sUFCtN-J2jY-FdY8SzVsTdu29vbZwA5Uty5WVoPbcq3fdc5ESJG-~GDz-97FNSKE5~BsDnJlOouGG4JBWhg__",
    },
    {
      name: "Workman",
      role: "Designer",
      image:
        "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
    },
    {
      name: "Livia Bator",
      role: "CEO",
      image:
        "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
    },
    {
      name: "Workman",
      role: "Designer",
      image:
        "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
    },
    {
      name: "Livia Bator",
      role: "CEO",
      image:
        "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <div className="flex items-center justify-between mb-6">
            {senders.map((sender, index) => {
              return (
                <div key={index} className="text-center">
                  <img
                    src={sender.image}
                    alt={sender.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <p className="font-bold">{sender.name}</p>
                  <p className="text-blue-600">{sender.role}</p>
                </div>
              );
            })}
            <div className="flex items-center justify-center">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                ➝
              </button>
            </div>
          </div>
         
          <div className="flex items-center">
            Write Amount{" "}
            <div className="relative flex items-center overflow-hidden">
              <input
                type="text"
                
                onChange={()=>{}}
                placeholder="Write Amount"
                className="bg-gray-100 rounded-full ml-4 pl-2 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="absolute bg-black text-white rounded-full flex items-right h-fill-available right-0 pl-4 pr-4 pt-2" style={{ height: '-webkit-fill-available' }}>
                Send
                <Image src={send} alt="Send" width={24} height={24} className="ml-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
