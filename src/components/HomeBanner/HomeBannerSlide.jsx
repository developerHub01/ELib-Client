const HomeBannerSlide = ({ heading, description, bgLink }) => {
  return (
    <div
      className={`min-h-[80vh] w-full px-5 py-10 flex justify-start items-center relative before:content-['*'] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-gradient-to-r before:from-gray-950 before:via-gray-950/50 before:pointer-events-none before:mix-blend-darken`}
      style={{
        background: `url('${bgLink}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-xl text-left relative z-10 text-white">
        <h2
          className="text-4xl md:text-6xl font-black text-transparent uppercase pb-4 w-full"
          style={{
            WebkitTextStroke: "2px #fff",
          }}
        >
          {heading}
        </h2>
        <p className="text-slate-50 w-full">{description}</p>
      </div>
    </div>
  );
};

export default HomeBannerSlide;
