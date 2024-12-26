"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import send from "../assets/send.png";
import Image from "next/image";

const QuickTransfer = ({ quickTransferData }) => {
  const customArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  text-white rounded-full"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
            <div className="w-4 h-4 border-t-4 border-l-4 border-blue-500 transform rotate-315"></div>
          </div>
        </div>
      </button>
    );

  const customArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  text-white rounded-full"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
            <div className="w-4 h-4 border-t-4 border-l-4 border-blue-500 transform rotate-135"></div>
          </div>
        </div>
      </button>
    );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <Carousel
            renderArrowPrev={customArrowPrev}
            renderArrowNext={customArrowNext}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            {quickTransferData.map((profile, index) => {
              return (
                <div key={index} className="flex items-center justify-around">
                  {profile.setItem.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
          <div className="flex items-center mt-12">
            Write Amount{" "}
            <div className="relative flex items-center overflow-hidden">
              <input
                type="text"
                value={344}
                onChange={() => {}}
                placeholder="Write Amount"
                className="bg-gray-100 rounded-full ml-4 pl-2 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                className="absolute bg-black text-white rounded-full flex items-right h-fill-available right-0 pl-4 pr-4 pt-2"
                style={{ height: "-webkit-fill-available" }}
              >
                Send
                <Image
                  src={send}
                  alt="Send"
                  width={24}
                  height={24}
                  className="ml-[10px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
