import React from "react";

import { BsStar, BsStarFill } from "react-icons/bs";

const Rating = ({ rating }) => {
  let stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center items-center py-3 gap-2 text-2xl text-yellow-500">
      {stars.map((star) =>
        star <= +rating ? <BsStarFill key={star} /> : <BsStar key={star} />
      )}
    </div>
  );
};

export default Rating;
