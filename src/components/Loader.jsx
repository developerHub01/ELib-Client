import React, { useContext } from "react";
import { LoaderContext } from "../Context/LoaderProvider";
import { AuthContext } from "../Context/AuthProvider";

const Loader = () => {
  const { isLoading } = useContext(LoaderContext);
  const { userLoading } = useContext(AuthContext);
  return (
    <>
      {isLoading && userLoading && (
        <section className="fixed top-0 left-0 w-full h-full z-30 bg-white/50 grid place-items-center select-none">
          <p className="px-14 py-8 border-4 border-gray-950 bg-gray-950 text-white text-3xl animate-bounce">
            Loading...
          </p>
        </section>
      )}
    </>
  );
};

export default Loader;
