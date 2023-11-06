import React, { useEffect, useRef, useState } from "react";

const useCount = (maxCount, ref, duration = 2000, intervalTime = 50) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeOutInterval = setTimeout(() => {
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
          threshold: 0.5,
        }
      );
      console.log(ref.courrent);
      observer.observe(ref.current);

      return () => observer.unobserve(ref.current);
    }, 500);
    return () => clearTimeout(timeOutInterval);
  }, []);
  return [count];
};

export default useCount;
