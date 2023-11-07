import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import CategoryPageCard from "../components/CategoryPageCard";
import axios from "axios";
import { serverApi } from "../constant/constant";
const CategoryPage = () => {
  const { id } = useParams();
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get(`${serverApi}/books/${id}`)
      .then((res) => setBookList((prev) => res.data))
      .catch((error) => {
        console.log(error.message);
      });
    console.log("=====================");
  }, []);
  return (
    <>
      <section
        className={`w-full min-h-[40vh] py-10 bg-[url('https://i.ibb.co/TrS1cGX/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg')] bg-cover bg-center bg-no-repeat relative before:content-['*'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-950/70 grid place-items-center`}
      >
        <Container>
          <h1 className="capitalize font-headingFont text-white relative z-10 text-center text-2xl sm:text-5xl font-extrabold">
            {id}
          </h1>
        </Container>
      </section>
      <section className="w-full py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookList.map((item) => (
              <CategoryPageCard key={item._id} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoryPage;
