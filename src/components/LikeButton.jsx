import { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [colorButton, setColorButton] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setCount(count + 1);
    setColorButton((colorButton + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorButton],
    color: 'white',
    padding: '10px',
    borderRadius: '2px',
    width: '120px',
    cursor: 'pointer',
  };

  return (
    <button className="likeButton" style={buttonStyle} onClick={handleClick}>
      {count} Likes
    </button>
  );
};

export default LikeButton;
