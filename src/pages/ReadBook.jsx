import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderContext } from "../Context/LoaderProvider";
import axios from "axios";
import { serverApi } from "../constant/constant";
import Container from "../components/Container";

const ReadBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const { bookName, description } = bookData;

  useEffect(() => {
    axios.get(`${serverApi}/books/details/${id}`).then((res) => {
      setBookData((prev) => res.data);
      setIsLoading((prev) => false);
    });
  }, [isLoading]);

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-14">
      <Container>
        <div className="w-full text-gray-500 dark:text-white flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </Container>
    </section>
  );
};

export default ReadBook;
