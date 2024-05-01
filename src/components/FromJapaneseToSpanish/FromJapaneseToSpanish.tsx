import ExerciseTypeSelector from '../ExerciseTypeSelector/ExerciseTypeSelector';

const FromJapaneseToSpanish = () => {
  return <>
    <p>大</p>
    <input type="text" name="kanji-meaning" id="meaning-input" />
    <button type="button">Check</button>
    <span>✔</span>
    <span>✗</span>
    <ExerciseTypeSelector />
    
  </>
};

export default FromJapaneseToSpanish;