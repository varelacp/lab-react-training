const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(color, parseInt(e.target.value));
  };

  const colorStyle = {
    backgroundColor:
      color === 'r'
        ? `rgb(${value}, 0, 0)`
        : color === 'g'
        ? `rgb(0, ${value}, 0)`
        : `rgb(0, 0, ${value})`,
    width: '50px',
    height: '50px',
    display: 'inline-block',
    marginRight: '10px',
  };

  return (
    <div>
      <div style={colorStyle}></div>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={0}
        max={255}
      />
    </div>
  );
};

export default SingleColorPicker;
