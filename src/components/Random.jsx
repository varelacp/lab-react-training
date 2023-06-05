/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons'; */

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      Random value between {min} and {max} <span>{'=>'}</span> {randomNumber}
      {/*  Random value between {min} and {max} <FontAwesomeIcon icon={faEquals} />
      <FontAwesomeIcon icon={faChevronRight} /> {randomNumber} */}
    </div>
  );
};

export default Random;
