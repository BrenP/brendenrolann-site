import React, { useEffect, useState, useMemo } from "react";
import "../StarBackground.css";

export default function StarBackground({ count = 60 }) {
  // Generate static star positions and sizes
  const starProps = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const isBig = Math.random() < 0.1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = isBig ? 3 + Math.random() * 3 : 0.8 + Math.random() * 1.2;
      return { isBig, left, top, size };
    });
  }, [count]);

  // Track which stars are twinkling
  const [twinkleIndices, setTwinkleIndices] = useState(() => {
    const indices = Array.from({ length: count }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return new Set(indices.slice(0, Math.floor(count * 0.33)));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const indices = Array.from({ length: count }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setTwinkleIndices(new Set(indices.slice(0, Math.floor(count * 0.33))));
    }, 3500); // slower interval
    return () => clearInterval(interval);
  }, [count]);

  const stars = starProps.map((props, i) => {
    const isTwinkle = twinkleIndices.has(i);
    return (
      <div
        key={"star-" + i}
        className={
          "star" +
          (props.isBig ? " big-star" : "") +
          (isTwinkle ? " twinkle" : "")
        }
        style={{
          left: `${props.left}vw`,
          top: `${props.top}vh`,
          width: `${props.size}px`,
          height: `${props.size}px`,
        }}
      />
    );
  });

  return <div className="starry-bg">{stars}</div>;
}
