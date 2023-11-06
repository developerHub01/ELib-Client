import React from "react";
import BookComp from "./BookComp";

const About = () => {
  const generateShadow = () => {
    let shadow = "";
    for (let i = 1; i <= 20; i++) {
      shadow += `${i}px ${i}px ${
        i % 2 ? "rgb(156, 163, 175)" : "rgb(17, 24, 39)"
      }`;
      if (i < 20) shadow += ", ";
    }
    return shadow;
  };
  return (
    <section className="py-10 w-full bg-white dark:bg-gray-900 select-none">
      <div className="w-[90%] max-w-lg mx-auto cursor-pointer">
        <BookComp>
          <div className="w-full">
            <h2 className="text-center text-2xl sm:text-4xl font-bold text-white capitalize pb-5 font-headingFont">
              About Us
            </h2>
            <p className="text-xs md:text-base font-light">
              Welcome to our library management platform, where knowledge and
              organization meet seamlessly. Our mission is to empower libraries
              and book enthusiasts with cutting-edge tools to efficiently
              catalog, manage, and explore the world of literature. With a
              user-friendly interface and a passion for books, we're dedicated
              to simplifying library operations and fostering a love for
              reading. Discover our commitment to book excellence and
              innovation, as we help you unlock the power of words and knowledge
              in the digital age.
            </p>
          </div>
        </BookComp>
      </div>
    </section>
  );
};

export default About;
