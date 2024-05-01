import { useState } from 'react';

import ExerciseTypeSelector from '../ExerciseTypeSelector/ExerciseTypeSelector';
import Readings from '../Readings/Readings';
import Vocabulary from '../Vocabulary/Vocabulary';

const Exercises = () => {
  const [type, setType] = useState('READINGS');

  return (
    <section>
      <ExerciseTypeSelector onChange={(type: string) => setType(type)} />
      { type === 'READINGS' ? <Readings /> : <Vocabulary /> }
    </section>
  );
};

export default Exercises;