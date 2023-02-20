import React from "react";

const LazyImage = ({ src }) => {
  const [imageSrc, setImageSrc] = React.useState("");
  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);
  return <img src={imageSrc} alt="" />;
};

export default LazyImage;
