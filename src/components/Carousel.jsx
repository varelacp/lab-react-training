import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className="carousel">
      <button className="left-button" onClick={handleLeftClick}>
        Left
      </button>
      <img src={images[currentImage]} alt="" />
      <button className="right-button" onClick={handleRightClick}>
        Right
      </button>
    </div>
  );
};

export default Carousel;
