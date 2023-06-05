const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;

  function rgbToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  const textStyle = {
    color: getTextColor(r, g, b),
    fontWeight: 'regular',
    fontSize: '24px',
  };

  function getTextColor(r, g, b) {
    const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    return luminance > 0.5 ? 'black' : 'white';
  }

  const boxStyle = {
    backgroundColor,
    width: '50vw',
    height: '8vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginBotton: '50px',
    border: '2px solid black',
    marginTop: '20px',
    marginLeft: '20px',
  };

  return (
    <div style={boxStyle}>
      <span style={textStyle}>
        {backgroundColor}
        <br />
        {hexColor}
      </span>
    </div>
  );
};

export default BoxColor;
