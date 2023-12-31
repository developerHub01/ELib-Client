import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { LoaderContext } from "../Context/LoaderProvider";
import axios from "axios";
import { serverApi } from "../constant/constant";
import { AuthContext } from "../Context/AuthProvider";
import AllBooksCard from "../components/AllBooksCard";
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
          console.log(res.data);
          setAllBooksData((prev) => res.data);
          setFillteredData((prev) => res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });

      axios
        .get(`${serverApi}/borrowed/allbooks/${user.email}`)
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
  }, [isLoading, user]);

  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <Container>
        <div className="w-full">
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white capitalize pb-5 font-headingFont">
            All Books
          </h2>
          {filterBgState}
          <div
            className={`w-72 bg-gray-900 dark:bg-white/10 flex relative rounded-md overflow-hidden mx-auto`}
          >
            <span
              className={`absolute w-1/2 h-full bg-gray-950 dark:bg-white/50 backdrop-blur-sm ${animProp} z-0`}
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
        {fillteredData.length ? (
          <div className="grid md:grid-cols-2 gap-5">
            {fillteredData.map((item) => (
              <AllBooksCard key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <h1 className="text-gray-950 dark:text-white text-4xl font-bold text-center animate-bounce py-5">
            {isLoading && allBooksData ? "Loading..." : "No Books Available"}
          </h1>
        )}
      </Container>
    </section>
  );
};

export default AllBooks;
