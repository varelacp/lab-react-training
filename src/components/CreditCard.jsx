import masterCardImage from '../assets/images/mastercard.png';
import visaImage from '../assets/images/visa.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardNumber = number.slice(-4);
  const cardImage = type === 'Visa' ? visaImage : masterCardImage;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="card-type">
        {type === 'Master Card' ? (
          <img src={cardImage} alt={type} className="mastercard-logo" />
        ) : (
          <img src={cardImage} alt={type} />
        )}

        {/*    <img src={cardImage} alt={type} /> */}
      </div>
      <div className="card-number">
        <h4>•••• •••• •••• {cardNumber}</h4>
      </div>
      <div className="card-info">
        <p>
          Expires {expirationMonth}/{expirationYear} | {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
