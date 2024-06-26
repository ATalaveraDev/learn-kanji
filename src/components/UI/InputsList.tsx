import { useState } from 'react';

import './InputsList.css';

type InputsListComponent = {
  title: string;
};

const InputsList = ({title}: InputsListComponent) => {
  const [readings, setReadings] = useState([{ id: title.toLowerCase(), value: '' }]);

  const addInput = () => {
    setReadings((prevReadings) => {
      const newReadings = [...prevReadings, { id: title.toLowerCase(), value: '' }];

      return newReadings;
    });
  };

  return (
    <div className="inputs-list-container">
      <h5>{title}</h5>
      {readings.map((input, index) => <input key={`${input.id}-${index}`} type="text" />)}
      <button type="button" onClick={addInput}>+</button>
    </div>
  );
};

export default InputsList;