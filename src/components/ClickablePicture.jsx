import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return <img src={isClicked ? imgClicked : img} onClick={handleClick} />;
};

export default ClickablePicture;
