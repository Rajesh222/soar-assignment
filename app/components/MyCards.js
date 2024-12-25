import React from "react";
import master_card from "../assets/master_card.png";
import Chip_Card from "../assets/Chip_Card.png";
import Chip_Card_dark from "../assets/Chip_Card_dark.png";
import master from "../assets/master.png";

import Image from "next/image";

const MyCards = () => {
  const cards = [
    {
      id: 1,
      balance: 5756,
      cardHolder: "Rajesh Kumar",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      cardType: "master_card",
    },
    {
      id: 2,
      balance: 5756,
      cardHolder: "Eddy Cusuma",
      validThru: "06/23",
      cardNumber: "3778 **** **** 3763",
      cardType: "master_card",
    },
    {
      id: 3,
      balance: 5756,
      cardHolder: "Emmanuel",
      validThru: "12/22",
      cardNumber: "3778 **** **** 2358",
      cardType: "master_card",
    },
  ];
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">My Cards</h2>
        <a href="#" className="text-blue-500 hover:underline">
          See All
        </a>
      </div>

      <div className="h-[300px]">
        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-w-[300px]">
          {cards.map((card, index) => {
          return  <>
            {
              index === 0 ? (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg relative">
                  <div className="flex justify-between pl-6 pt-6 pr-6 mb-6">
                    <div>
                      <p className="text-sm">Balance</p>
                      <h3 className="text-3xl font-bold">${card.balance}</h3>
                    </div>
                    {/* Chip Icon */}
                    <div className="h-auto">
                      <Image src={Chip_Card} alt="Chip_Card" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pl-6 pr-6 pb-6 text-sm">
                    <p>
                      <span className="block uppercase text-xs text-gray-400">
                        Card Holder
                      </span>
                      {card.cardHolder}
                    </p>
                    <p>
                      <span className="block uppercase text-xs text-gray-400">
                        Valid Thru
                      </span>
                      {card.validThru}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pl-6 pr-6 pb-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-b-xl">
                    <div className="mt-6 text-lg font-semibold tracking-wider">
                      {card.cardNumber}
                    </div>
                    <Image
                      src={master_card}
                      alt="master_card"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white text-gray-800 rounded-xl shadow-md border">
                  <div className="flex justify-between p-6">
                    <div>
                      <p className="text-sm text-gray-600">Balance</p>
                      <h3 className="text-3xl font-bold">$5,756</h3>
                    </div>
                    {/* Chip Icon */}
                    <div className="h-auto">
                      <Image src={Chip_Card_dark} alt="Chip_Card_dark" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pl-6 pr-6 pb-6 text-sm text-gray-600">
                    <p>
                      <span className="block uppercase text-xs">
                        Card Holder
                      </span>
                      Eddy Cusuma
                    </p>
                    <p>
                      <span className="block uppercase text-xs">
                        Valid Thru
                      </span>
                      12/22
                    </p>
                  </div>
                  <div className="border-t-[2px] border-gray-200 w-full"></div>
                  <div className="flex justify-between items-center pl-6 pr-6 pb-6 rounded-b-xl">
                    <div className="mt-6 text-lg font-semibold tracking-wider">
                      3778 **** **** 1234
                    </div>
                    <Image
                      src={master}
                      alt="master_card"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              )
            }</>
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCards;
