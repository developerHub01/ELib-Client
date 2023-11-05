import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <footer className="bg-gray-950 w-full py-10 relative z-0">
      <div className=" w-[90%] max-w-6xl mx-auto">
        <div className="text-white text-center w-full max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white pb-2">
            ELib
          </h2>
          <p className="text-slate-100 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur consequuntur dolorem accusamus quos laudantium et beatae
            molestiae enim aut suscipit quia sit tempora ratione perspiciatis
            recusandae possimus, optio blanditiis impedit? Perferendis,
            obcaecati? Officia, obcaecati quas voluptatibus illum voluptatem
            rem.
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
          <p className="text-sm underline py-4">
            &copy; {new Date().getFullYear()} ELib - Your E-Library Management
            Software
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;