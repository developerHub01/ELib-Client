import React, { useRef } from "react";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import useCount from "../../customHooks/useCount";
import Container from "../Container";

const Countdown = () => {
  const maxTotalUser = 50000;
  const maxTotalBooks = 10000;
  const sectionRef = useRef(null);

  const [bookCount] = useCount(maxTotalBooks, sectionRef, 2000, 50);
  const [userCount] = useCount(maxTotalUser, sectionRef, 2000, 50);

  return (
    <section
      className="w-full py-14 bg-white dark:bg-gray-900 text-gray-950 dark:text-white"
      ref={sectionRef}
    >
      <Container>
        <div className="w-full grid sm:grid-cols-2 gap-x-5 gap-y-12">
          <div className="w-full flex flex-col gap-4 justify-center items-center text-center">
            <ImBooks className="text-7xl" />
            <p className="text-3xl font-bold">
              {bookCount >= 1000
                ? (bookCount / 1000).toFixed(2) + " k"
                : bookCount}
            </p>
            <p>Total Books</p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center text-center">
            <FaUsers className="text-7xl" />
            <p className="text-3xl font-bold">
              {userCount >= 1000
                ? (userCount / 1000).toFixed(2) + " k"
                : userCount}
            </p>
            <p>Total Users</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Countdown;
