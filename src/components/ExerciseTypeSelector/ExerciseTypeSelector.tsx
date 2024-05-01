type ExerciseTypeSelectorComponent = {
  onChange: (type: string) => void;
}

const ExerciseTypeSelector = ({onChange}: ExerciseTypeSelectorComponent) => {  
  return (
    <div>
      <button onClick={() => onChange('READINGS')}>Lecturas</button>
      <button onClick={() => onChange('VOCABULARY')}>Vocabulario</button>
    </div>
  );
};

export default ExerciseTypeSelector;