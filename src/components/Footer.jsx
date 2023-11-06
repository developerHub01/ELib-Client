import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";
import Container from "./Container";

const animProp = "transition-all duration-100 ease-in-out";

const socialLinks = [
  {
    path: "/",
    icon: <BiLogoFacebook />,
  },
  {
    path: "/",
    icon: <BiLogoYoutube />,
  },
  {
    path: "/",
    icon: <BiLogoTwitter />,
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-950 w-full py-10 relative z-0">
      <Container>
        <div className="text-white text-center w-full max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white pb-2">
            ELib
          </h2>
          <p className="text-slate-100 pb-4">
            Welcome to ELib, where the pages of knowledge come to life. ELib is
            your digital haven for exploring, borrowing, and cherishing an
            extensive collection of books. Whether you're a dedicated reader or
            a librarian managing a treasure trove of literature, ELib offers
            seamless access, organization, and discovery. With user-friendly
            features and a passion for promoting literacy, ELib is your trusted
            companion in the world of words. Dive into a universe of books,
            discover new adventures, and embark on a journey of lifelong
            learning with ELib.
          </p>
          <ul className="flex justify-center items-center gap-3">
            {socialLinks.map(({ path, icon }, i) => (
              <li
                key={i}
                className={`w-10 h-10 bg-white/5 hover:bg-white/20 ${animProp} backdrop-blur-sm rounded-lg grid place-items-center text-2xl`}
              >
                <Link to={path}>{icon}</Link>
              </li>
            ))}
          </ul>
          <p className="text-sm underline pt-4">
            &copy; {new Date().getFullYear()} ELib - Your E-Library Management
            Software
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
