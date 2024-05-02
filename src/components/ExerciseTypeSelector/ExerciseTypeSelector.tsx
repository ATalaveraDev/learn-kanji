type ExerciseTypeSelectorComponent = {
  activeOption: string;
  onChange: (type: string) => void;
}

const ExerciseTypeSelector = ({onChange, activeOption}: ExerciseTypeSelectorComponent) => {  
  return (
    <div className="btn-group">
      <div>
        <button className={`full ${activeOption === 'READINGS' ? 'active' : ''}`} onClick={() => onChange('READINGS')}>Lecturas</button>
      </div>
      <div>
        <button className={`full ${activeOption === 'VOCABULARY' ? 'active' : ''}`} onClick={() => onChange('VOCABULARY')}>Vocabulario</button>
      </div>
    </div>
  );
};

export default ExerciseTypeSelector;