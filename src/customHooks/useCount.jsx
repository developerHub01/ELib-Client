import React, { useEffect, useRef, useState } from "react";

const useCount = (maxCount, ref, duration = 2000, intervalTime = 50) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) => {
        if (items[0].isIntersecting && count < maxCount) {
          const time = setInterval(() => {
            setCount((prev) => {
              const steps =
                prev + (maxCount * intervalTime) / duration < maxCount
                  ? (maxCount * intervalTime) / duration
                  : maxCount - prev;
              if (prev < maxCount) prev += steps;
              else clearInterval(time);
              return prev;
            });
          }, intervalTime);
          return () => clearInterval(time);
        }
      },
      {
        threshold: 0.8,
      }
    );
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);
  return [count];
};

export default useCount;
