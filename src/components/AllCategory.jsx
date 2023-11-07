import React from "react";
import Category from "./Category";
import Container from "./Container";

const categoryList = [
  {
    id: "history",
    name: "History",
    imgLink: `https://i.ibb.co/1KHW6qs/history.jpg`,
  },
  {
    id: "horror",
    name: "Horror",
    imgLink: `https://i.ibb.co/CHMFcqB/horror.jpg`,
  },
  {
    id: "sci-fi-fantasy",
    name: "Sci-Fi & Fantasy",
    imgLink: `https://i.ibb.co/LZmp3R5/Sci-Fi-Fantasy.jpg`,
  },
  {
    id: "science-math",
    name: "Science & Math",
    imgLink: `https://i.ibb.co/LZK4r2Z/Science-Math.jpg`,
  },
];

const AllCategory = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <Container>
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white capitalize pb-5 font-headingFont">
          All Category of Books
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryList.map((item) => (
            <Category key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllCategory;
