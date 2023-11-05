import React from "react";

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

const About = () => {
  return (
    <section className="py-10 w-full bg-white dark:bg-gray-900 select-none">
      <div className="w-[90%] max-w-lg mx-auto pr-4">
        <div
          className="relative w-full h-full py-16 px-5 border rounded-s-2xl border-l-[40px] border-gray-400 bg-gray-950 text-center text-white flex flex-col gap-12 justify-between shadow-2xl"
          style={{
            boxShadow: generateShadow(),
          }}
        >
          <img
            src="https://i.ibb.co/8zGCw9N/bg.png"
            alt=""
            className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-10"
          />
          <div className="w-full relative z-10">
            <h2 className="text-center text-2xl sm:text-4xl font-bold text-white capitalize pb-5 font-headingFont">
              About Us
            </h2>
            <p>
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
          <p className="text-right -rotate-6 font-signFont text-3xl md:text-6xl underline select-none mt-3">
            Shakil
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
