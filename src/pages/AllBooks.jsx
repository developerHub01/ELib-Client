import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { LoaderContext } from "../Context/LoaderProvider";
import axios from "axios";
import { serverApi } from "../constant/constant";
import { AuthContext } from "../Context/AuthProvider";
import AllBooksCard from "../components/AllBooksCard";
import { Helmet } from "react-helmet";
const animProp = "transition-all duration-100 ease-in-out";
const AllBooks = () => {
  const [filterBgState, setFilterBgState] = useState(true);
  const [allBooksData, setAllBooksData] = useState([]);
  const [borrowedData, setBorrowedData] = useState([]);
  const [fillteredData, setFillteredData] = useState([]);
  const { user } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const handleAllFilter = () => {
    setFilterBgState((prev) => true);
    setFillteredData((prev) => allBooksData);
  };
  const handleBorrowedFilter = () => {
    setFilterBgState((prev) => false);
    setFillteredData((prev) => borrowedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${serverApi}/books`)
        .then((res) => {
          setAllBooksData((prev) => res.data);
          setFillteredData((prev) => res.data);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading((prev) => false);
        });

      axios
        .get(`${serverApi}/borrowed/books/${user.email}`)
        .then((res) => {
          setBorrowedData((prev) => res.data);
          setIsLoading((prev) => false);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading((prev) => false);
        });
    };
    fetchData();
  }, [isLoading]);

  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <Helmet>
        <title>ELL Books</title>
      </Helmet>
      <Container>
        <div className="w-full">
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white capitalize pb-5 font-headingFont">
            All Books
          </h2>
          {filterBgState}
          <div
            className={`w-72 bg-white/10 flex relative rounded-md overflow-hidden mx-auto`}
          >
            <span
              className={`absolute w-1/2 h-full bg-white/50 backdrop-blur-sm ${animProp} z-0`}
              style={{
                left: filterBgState ? "0" : "50%",
              }}
            ></span>
            <button
              className={`w-full text-white py-2 px-5 hover:bg-white/10 relative z-10 ${animProp}`}
              onClick={handleAllFilter}
            >
              All
            </button>
            <button
              className={`w-full text-white py-2 px-5 hover:bg-white/10 relative z-10 ${animProp}`}
              onClick={handleBorrowedFilter}
            >
              Borrowed
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {!isLoading &&
            fillteredData.length &&
            fillteredData.map((item) => (
              <AllBooksCard key={item._id} {...item} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default AllBooks;
