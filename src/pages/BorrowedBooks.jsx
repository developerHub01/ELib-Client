import React from "react";
import Container from "../components/Container";
import BorrowedBookCard from "../components/BorrowedBookCard";

const BorrowedBooks = () => {
  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <Container>
        <div>
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-950 dark:text-white capitalize pb-5 font-headingFont">
            Your Borrowed Books
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BorrowedBookCard />
        </div>
      </Container>
    </section>
  );
};

export default BorrowedBooks;
