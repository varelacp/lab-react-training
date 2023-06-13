import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="color-picker-container">
      <div className="input-fields">
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={handleColorChange}
        />
        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={handleColorChange}
        />
        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={handleColorChange}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          className="color-square"
          style={{
            backgroundColor: rgbColor,
            width: '50px',
            height: '50px',
            margin: '20px',
          }}
        ></div>
        <p>{rgbColor}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
