import '../../App.css';
import InputsList from '../UI/InputsList';

const Readings = () => {
  return (
    <>
      <div className="readings-container row">
        <InputsList title="Kunyomi" />
        <InputsList title="Onyomi" />
      </div>
      <div className="row">
        <button className="bnt-check half" type="button">Check</button>
      </div>
    </>
  );
};

export default Readings;