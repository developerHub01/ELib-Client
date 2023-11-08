import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import BorrowedBookCard from "../components/BorrowedBookCard";
import { LoaderContext } from "../Context/LoaderProvider";
import axios from "axios";
import { serverApi } from "../constant/constant";
import { AuthContext } from "../Context/AuthProvider";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [updateBorrowList, setUpdateBorrowList] = useState(
    Math.round(Math.random() * 50)
  );
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const { user } = useContext(AuthContext);
  const { email } = user;
  useEffect(() => {
    axios
      .get(`${serverApi}/borrowed/${email}`, { withCredentials: true })
      .then((res) => {
        setBorrowedBooks((prev) => res.data);
        setIsLoading((prev) => false);
      })
      .catch((error) => console.log(error.message));
  }, [isLoading, updateBorrowList]);
  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <Container>
        <div>
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white capitalize pb-5 font-headingFont">
            Your Borrowed Books
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {!isLoading &&
            borrowedBooks.length &&
            borrowedBooks?.map((item) => (
              <BorrowedBookCard
                key={item._id}
                {...item}
                setUpdateBorrowList={setUpdateBorrowList}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default BorrowedBooks;
