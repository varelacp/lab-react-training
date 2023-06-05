import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          <Rating>{rating}</Rating>
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
