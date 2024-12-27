import React from "react";
import master_card from "../assets/master_card.png";
import Chip_Card from "../assets/Chip_Card.png";
import Chip_Card_dark from "../assets/Chip_Card_dark.png";
import master from "../assets/master.png";

import Image from "next/image";

const MyCards = ({ cards }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">My Cards</h2>
        <a href="#" className="text-blue-500 hover:underline">
          See All
        </a>
      </div>

      <div className="h-[300px]">
        <div
          className="xl:grid xl:grid-cols-2 gap-4 flex overflow-x-auto xl:overflow-hidden"
          style={{ width: "100%" }}
        >
          {cards.map((card, index) => {
            return (
              <div key={card.id}>
                {index === 0 ? (
                  <div
                    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg relative"
                    style={{ minWidth: "300px" }}
                  >
                    <div className="flex justify-between pl-6 pt-6 pr-6 mb-6">
                      <div>
                        <p className="text-sm">Balance</p>
                        <h3 className="text-3xl font-bold">${card.balance}</h3>
                      </div>

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
                  <div
                    className="bg-white text-gray-800 rounded-xl shadow-md border "
                    style={{ minWidth: "300px" }}
                  >
                    <div className="flex justify-between p-6">
                      <div>
                        <p className="text-sm text-gray-600">Balance</p>
                        <h3 className="text-3xl font-bold">${card.balance}</h3>
                      </div>

                      <div className="h-auto">
                        <Image src={Chip_Card_dark} alt="Chip_Card_dark" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pl-6 pr-6 pb-6 text-sm text-gray-600">
                      <p>
                        <span className="block uppercase text-xs">
                          Card Holder
                        </span>
                        {card.cardHolder}
                      </p>
                      <p>
                        <span className="block uppercase text-xs">
                          Valid Thru
                        </span>
                        {card.validThru}
                      </p>
                    </div>
                    <div className="border-t-[2px] border-gray-200 w-full"></div>
                    <div className="flex justify-between items-center pl-6 pr-6 pb-6 rounded-b-xl">
                      <div className="mt-6 text-lg font-semibold tracking-wider">
                        {card.cardNumber}
                      </div>
                      <Image
                        src={master}
                        alt="master_card"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCards;
