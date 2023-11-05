import React from "react";
import Category from "./Category";

const categoryList = [
  {
    id: "history",
    name: "History",
    imgLink: `https://i.ibb.co/1KHW6qs/history.jpg`,
  },
  {
    id: "Horror",
    name: "Horror",
    imgLink: `https://i.ibb.co/CHMFcqB/horror.jpg`,
  },
  {
    id: "Sci-Fi-Fantasy",
    name: "Sci-Fi & Fantasy",
    imgLink: `https://i.ibb.co/LZmp3R5/Sci-Fi-Fantasy.jpg`,
  },
  {
    id: "Science-Math",
    name: "Science & Math",
    imgLink: `https://i.ibb.co/LZK4r2Z/Science-Math.jpg`,
  },
];

const AllCategory = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col gap-5">
        <h2 className="text-center text-3xl font-bold text-gray-950 dark:text-white capitalize pb-5">
          All Category of Books
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryList.map((item) => (
            <Category key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
