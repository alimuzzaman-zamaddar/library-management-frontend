import React from "react";

interface ImageProps {
  Src: string;
  Alt: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const Image: React.FC<ImageProps> = ({ Src, Alt, className, onClick }) => {
  return (
    <img
      data-aos="fade-up"
      data-aos-delay="100"
      src={Src}
      alt={Alt}
      className={className}
      onClick={onClick}
    />
  );
};

export default Image;
