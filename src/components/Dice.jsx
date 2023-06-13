import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);

  const handleClick = () => {
    setDiceValue(null);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 1000);
  };

  const getImagePath = () => {
    switch (diceValue) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return diceEmpty;
    }
  };

  return (
    <div onClick={handleClick} className="dice">
      <img
        src={getImagePath()}
        alt={diceValue ? `Dice ${diceValue}` : 'Empty Dice'}
      />
    </div>
  );
};

export default Dice;
