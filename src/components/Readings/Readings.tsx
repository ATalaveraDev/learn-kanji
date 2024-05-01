import '../../App.css';
import InputsList from '../UI/InputsList';

const Readings = () => {
  return (
    <div className="readings-container">
      <InputsList title="Kunyomi" />
      <InputsList title="Onyomi" />
    </div>
  );
};

export default Readings;