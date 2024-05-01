type ExerciseTypeSelectorComponent = {
  onChange: (type: string) => void;
}

const ExerciseTypeSelector = ({onChange}: ExerciseTypeSelectorComponent) => {  
  return (
    <div className="btn-group">
      <div>
        <button className="full" onClick={() => onChange('READINGS')}>Lecturas</button>
      </div>
      <div>
        <button className="full" onClick={() => onChange('VOCABULARY')}>Vocabulario</button>
      </div>
    </div>
  );
};

export default ExerciseTypeSelector;