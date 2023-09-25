import React, { useRef, useEffect, useState } from "react";

interface HeroImgProps {
    src: string;
  }
  

const HeroImg: React.FC<HeroImgProps> = ({ src }) => {
  const imageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // 50% of the image must be in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once the image is in view
        }
      });
    }, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const imageStyle = isInView
    ? {
        width: "100%", // Expand to full screen width
        transition: "width 0.5s", // Add a smooth transition effect
      }
    : {};

  return (
    <img
      ref={imageRef}
      src={src}
      alt="Expandable Image"
      style={imageStyle}
    />
  );
};

export default HeroImg;
