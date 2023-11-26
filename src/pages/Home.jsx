import React from "react";
import Categories from "../component/Categories";
import Featured from "../component/Featured";
import TopPicks from "../component/TopPicks";

const Home = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-content">
        <Featured />
      </div>
      <div className="py-10">
        <TopPicks />
      </div>
      <div className="py-10">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
