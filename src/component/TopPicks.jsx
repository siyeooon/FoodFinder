import React from "react";
import { topPicks } from "../data/data.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-gray-700 font-bold text-2xl text-center py-2">
        Top Recipe
      </h1>
      <div className=" lg:flex max-w[1520px] m-auto py-2 px-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", drag: "free", arrows: true }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <div className="flex justify-between">
                      <p className="font-['pretendard'] px-2 pt-4 font-bold text-base lg:text-2xl ">
                        {item.title}
                      </p>
                      <div className="hidden md:flex justify-end px-3 pt-4">
                        <p className="font-['pretendard'] bg-green-600 h-15 w-15 rounded-full text-white px-4 py-2 border-6 absolute ">
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end px-3">
                      <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                        View
                      </button>
                    </div>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 rase-out duration-300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
